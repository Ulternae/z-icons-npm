import React from 'react';

export interface LanLadderWaterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLadderWaterSolid: React.FC<LanLadderWaterSolidProps>;
export default LanLadderWaterSolid;
