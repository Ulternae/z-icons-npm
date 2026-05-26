import React from 'react';

export interface LanCutProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCut: React.FC<LanCutProps>;
export default LanCut;
