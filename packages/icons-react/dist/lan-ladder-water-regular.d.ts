import React from 'react';

export interface LanLadderWaterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLadderWaterRegular: React.FC<LanLadderWaterRegularProps>;
export default LanLadderWaterRegular;
