import React from 'react';

export interface LanGlassesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlassesRegular: React.FC<LanGlassesRegularProps>;
export default LanGlassesRegular;
