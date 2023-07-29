import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export const projectId = process.env.SANITY_STUDIO_PROJECT_ID!
export const dataset = process.env.SANITY_STUDIO_DATASET!

// export default defineConfig({
//   name: 'project-name',
//   title: 'Project Name',
//   projectId,
//   dataset,
//   plugins: [deskTool(), visionTool()],
//   schema: {
//     types: schemaTypes,
//   },
// })
      // Define the actions that should be available for singleton documents
      const singletonActions = new Set(["publish", "discardChanges", "restore"])

      // Define the singleton document types
      const singletonTypes = new Set(["settings"])

      export default defineConfig({
        name: "tma",
        title: "TMA",

        projectId,
        dataset,

        plugins: [
          deskTool({
            structure: (S) =>
              S.list()
                .title("Content")
                .items([

                  // Our singleton type has a list item with a custom child
                  S.listItem()
                    .title("Settings")
                    .id("settings")
                    .child(
                      // Instead of rendering a list of documents, we render a single
                      // document, specifying the `documentId` manually to ensure
                      // that we're editing the single instance of the document
                      S.document()
                        .schemaType("settings")
                        .documentId("settings")
                    ),

                  // // Regular document types
                  S.documentTypeListItem("staff").title("Staff"),
                  S.documentTypeListItem("service").title("Services"),
                  S.documentTypeListItem("project").title("Projects"),
                ]),
          })
        ],

        schema: {
          types: schemaTypes,

          // Filter out singleton types from the global “New document” menu options
          templates: (templates) =>
            templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
        },

        document: {
          // For singleton types, filter out actions that are not explicitly included
          // in the `singletonActions` list defined above
          actions: (input, context) =>
            singletonTypes.has(context.schemaType)
              ? input.filter(({ action }) => action && singletonActions.has(action))
              : input,
        },
      })
