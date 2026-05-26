import React from 'react';

export interface LanLandMineOnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLandMineOn: React.FC<LanLandMineOnProps>;
export default LanLandMineOn;
