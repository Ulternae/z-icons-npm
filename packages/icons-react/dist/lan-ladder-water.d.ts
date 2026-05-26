import React from 'react';

export interface LanLadderWaterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLadderWater: React.FC<LanLadderWaterProps>;
export default LanLadderWater;
