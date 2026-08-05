import React from 'react';

export interface LanGripDotsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGripDotsThin(props: LanGripDotsThinProps): React.ReactElement;
export default LanGripDotsThin;
