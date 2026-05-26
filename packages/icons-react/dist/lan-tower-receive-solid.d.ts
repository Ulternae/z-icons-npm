import React from 'react';

export interface LanTowerReceiveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTowerReceiveSolid: React.FC<LanTowerReceiveSolidProps>;
export default LanTowerReceiveSolid;
