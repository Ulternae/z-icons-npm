import React from 'react';

export interface LanReelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanReelRegular: React.FC<LanReelRegularProps>;
export default LanReelRegular;
