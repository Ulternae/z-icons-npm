import React from 'react';

export interface LanGlassEmptyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlassEmptyRegular: React.FC<LanGlassEmptyRegularProps>;
export default LanGlassEmptyRegular;
