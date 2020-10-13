import * as codebuild from '@aws-cdk/aws-codebuild';
import * as notifications from '@aws-cdk/aws-codestarnotifications';

export class FakeCodeBuildSource implements notifications.INotificationSource {
  constructor(private readonly project: codebuild.IProject) {}

  bind(): notifications.NotificationSourceConfig {
    return {
      sourceType: notifications.SourceType.CODE_BUILD,
      sourceAddress: this.project.projectArn,
    };
  }
}