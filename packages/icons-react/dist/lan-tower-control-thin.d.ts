import React from 'react';

export interface LanTowerControlThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTowerControlThin: React.FC<LanTowerControlThinProps>;
export default LanTowerControlThin;
