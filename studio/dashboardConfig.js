export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6040dac440853112ff9b83a8',
                  title: 'Sanity Studio',
                  name: 'sanity-lesson-demo-studio',
                  apiId: '144bbdef-f045-4b37-95ca-dcc3f263af51'
                },
                {
                  buildHookId: '6040dac444fd9a150293736d',
                  title: 'Blog Website',
                  name: 'sanity-lesson-demo',
                  apiId: '6a8824a3-dc12-480d-9b7b-6c43740522ab'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pkeyser10/sanity-lesson-demo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-lesson-demo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
