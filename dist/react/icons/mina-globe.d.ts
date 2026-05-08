import React from 'react';

export interface MinaGlobeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaGlobe: React.FC<MinaGlobeProps>;
export default MinaGlobe;
