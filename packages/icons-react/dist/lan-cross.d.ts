import React from 'react';

export interface LanCrossProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCross: React.FC<LanCrossProps>;
export default LanCross;
