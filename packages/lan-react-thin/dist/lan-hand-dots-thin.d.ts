import React from 'react';

export interface LanHandDotsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandDotsThin(props: LanHandDotsThinProps): React.ReactElement;
export default LanHandDotsThin;
