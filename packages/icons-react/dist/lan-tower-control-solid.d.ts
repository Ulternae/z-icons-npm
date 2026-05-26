import React from 'react';

export interface LanTowerControlSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTowerControlSolid: React.FC<LanTowerControlSolidProps>;
export default LanTowerControlSolid;
