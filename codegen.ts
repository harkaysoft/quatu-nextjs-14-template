import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  ignoreNoDocuments: true,
  schema: 'https://api.quatu.xyz',
  documents: ['src/**/*.ts'],
  generates: {
    'src/lib/gql/': {
      presetConfig: {
        gqlTagName: 'gql'
      },
      preset: 'client'
    },
    './graphql.schema.json': {
      plugins: ['introspection']
    }
  }
}

export default config
