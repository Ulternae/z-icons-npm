import React from 'react';

export interface LanBugsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBugsThin(props: LanBugsThinProps): React.ReactElement;
export default LanBugsThin;
