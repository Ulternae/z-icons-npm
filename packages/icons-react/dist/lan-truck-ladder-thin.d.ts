import React from 'react';

export interface LanTruckLadderThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckLadderThin: React.FC<LanTruckLadderThinProps>;
export default LanTruckLadderThin;
