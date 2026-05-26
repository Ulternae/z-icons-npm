import React from 'react';

export interface LanHandHoldingWaterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandHoldingWaterSolid: React.FC<LanHandHoldingWaterSolidProps>;
export default LanHandHoldingWaterSolid;
