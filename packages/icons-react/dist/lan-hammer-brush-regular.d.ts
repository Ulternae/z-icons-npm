import React from 'react';

export interface LanHammerBrushRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHammerBrushRegular: React.FC<LanHammerBrushRegularProps>;
export default LanHammerBrushRegular;
