import React from 'react';

export interface LanLandMineOnThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLandMineOnThin: React.FC<LanLandMineOnThinProps>;
export default LanLandMineOnThin;
