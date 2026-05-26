import React from 'react';

export interface LanGrillProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrill: React.FC<LanGrillProps>;
export default LanGrill;
