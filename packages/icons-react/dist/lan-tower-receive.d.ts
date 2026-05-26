import React from 'react';

export interface LanTowerReceiveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTowerReceive: React.FC<LanTowerReceiveProps>;
export default LanTowerReceive;
