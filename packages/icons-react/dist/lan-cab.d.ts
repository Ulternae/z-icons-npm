import React from 'react';

export interface LanCabProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCab: React.FC<LanCabProps>;
export default LanCab;
