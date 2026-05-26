import React from 'react';

export interface LanCodePullRequestDraftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCodePullRequestDraft: React.FC<LanCodePullRequestDraftProps>;
export default LanCodePullRequestDraft;
