import React from 'react';

export interface LanHammerBrushProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHammerBrush: React.FC<LanHammerBrushProps>;
export default LanHammerBrush;
