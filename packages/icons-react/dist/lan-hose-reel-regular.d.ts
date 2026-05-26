import React from 'react';

export interface LanHoseReelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHoseReelRegular: React.FC<LanHoseReelRegularProps>;
export default LanHoseReelRegular;
