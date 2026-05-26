import React from 'react';

export interface LanGlassRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlassRegular: React.FC<LanGlassRegularProps>;
export default LanGlassRegular;
