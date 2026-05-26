import React from 'react';

export interface LanCoffinCrossProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoffinCross: React.FC<LanCoffinCrossProps>;
export default LanCoffinCross;
