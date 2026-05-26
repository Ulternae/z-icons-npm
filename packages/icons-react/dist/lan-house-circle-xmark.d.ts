import React from 'react';

export interface LanHouseCircleXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseCircleXmark: React.FC<LanHouseCircleXmarkProps>;
export default LanHouseCircleXmark;
