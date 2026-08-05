import React from 'react';

export interface LanBriefsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBriefsThin(props: LanBriefsThinProps): React.ReactElement;
export default LanBriefsThin;
