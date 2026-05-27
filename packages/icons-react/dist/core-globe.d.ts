import React from 'react';

export interface CoreGlobeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreGlobe: React.FC<CoreGlobeProps>;
export default CoreGlobe;
