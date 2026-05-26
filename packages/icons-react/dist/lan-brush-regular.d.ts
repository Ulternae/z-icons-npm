import React from 'react';

export interface LanBrushRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBrushRegular: React.FC<LanBrushRegularProps>;
export default LanBrushRegular;
