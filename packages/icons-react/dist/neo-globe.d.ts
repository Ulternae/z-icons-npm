import React from 'react';

export interface NeoGlobeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoGlobe: React.FC<NeoGlobeProps>;
export default NeoGlobe;
