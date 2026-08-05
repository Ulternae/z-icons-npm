import React from 'react';

export interface LanCodePullRequestDraftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCodePullRequestDraft(props: LanCodePullRequestDraftProps): React.ReactElement;
export default LanCodePullRequestDraft;
