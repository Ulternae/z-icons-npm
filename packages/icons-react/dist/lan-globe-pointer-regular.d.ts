import React from 'react';

export interface LanGlobePointerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlobePointerRegular: React.FC<LanGlobePointerRegularProps>;
export default LanGlobePointerRegular;
