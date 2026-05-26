import React from 'react';

export interface LanGlassHalfFullRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlassHalfFullRegular: React.FC<LanGlassHalfFullRegularProps>;
export default LanGlassHalfFullRegular;
