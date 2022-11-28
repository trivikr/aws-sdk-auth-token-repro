import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as codebuild from "aws-cdk-lib/aws-codebuild";
import { readFileSync } from "fs";
import { resolve } from "path";

export class CodeBuildNpmPingTest extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const npmPingTestCode = readFileSync(resolve(__dirname, "npmPingTest.js"), {
      encoding: "utf8",
    });

    new codebuild.Project(this, "CodeBuildNpmPingTest", {
      environment: {
        buildImage: codebuild.LinuxBuildImage.STANDARD_6_0,
      },
      buildSpec: codebuild.BuildSpec.fromObject({
        version: "0.2",
        phases: {
          build: {
            commands: [`node -e '${npmPingTestCode}'`],
          },
        },
      }),
    });
  }
}
