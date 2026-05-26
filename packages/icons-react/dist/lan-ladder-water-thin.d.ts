import React from 'react';

export interface LanLadderWaterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLadderWaterThin: React.FC<LanLadderWaterThinProps>;
export default LanLadderWaterThin;
