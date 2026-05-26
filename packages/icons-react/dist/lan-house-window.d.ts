import React from 'react';

export interface LanHouseWindowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseWindow: React.FC<LanHouseWindowProps>;
export default LanHouseWindow;
