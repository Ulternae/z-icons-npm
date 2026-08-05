import React from 'react';

export interface LanCodePullRequestClosedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCodePullRequestClosed(props: LanCodePullRequestClosedProps): React.ReactElement;
export default LanCodePullRequestClosed;
