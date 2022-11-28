# aws-sdk-auth-token-repro

Tests npm ping on AWS CodeBuild

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Setup

- Run `yarn` to install dependencies.
- Run `yarn cdk deploy` deploy this stack.
- Visit `CodeBuildNpmPingTest*` project in CodeBuild AWS Console,
  and click on `Start Build`.
- Verify that the build succeeds, and the following output is displayed:

  ```console
  node version: v16.15.1

  npm version: 8.11.0

  { code: 0, signal: null }
  ```

- Run `yarn cdk destroy` destroy the stack.

### Oher userful commands

- `yarn cdk diff` compare deployed stack with current state.
- `yarn cdk synth` emits the synthesized CloudFormation template.
- You can also run the builds using AWS CLI. For example:

  ```console
  aws codebuild start-build --project-name <CodeBuildNpmPingTestName>
  ```
