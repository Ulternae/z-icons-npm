import React from 'react';

export interface CoreMagnifyingGlassPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreMagnifyingGlassPlus: React.FC<CoreMagnifyingGlassPlusProps>;
export default CoreMagnifyingGlassPlus;
