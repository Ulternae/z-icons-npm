import React from 'react';

export interface LanFerrisWheelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFerrisWheelRegular: React.FC<LanFerrisWheelRegularProps>;
export default LanFerrisWheelRegular;
