import React from 'react';

export interface LanScalpelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScalpel(props: LanScalpelProps): React.ReactElement;
export default LanScalpel;
