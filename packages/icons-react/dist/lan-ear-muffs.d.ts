import React from 'react';

export interface LanEarMuffsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEarMuffs: React.FC<LanEarMuffsProps>;
export default LanEarMuffs;
