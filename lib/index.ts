#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { CodeBuildNpmPingTest } from "./CodeBuildNpmPingTest";

const app = new cdk.App();
new CodeBuildNpmPingTest(app, "CodeBuildNpmPingTest");
