import React from 'react';

export interface LanGlassEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlassEmpty: React.FC<LanGlassEmptyProps>;
export default LanGlassEmpty;
