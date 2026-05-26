import React from 'react';

export interface LanTowerReceiveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTowerReceiveThin: React.FC<LanTowerReceiveThinProps>;
export default LanTowerReceiveThin;
