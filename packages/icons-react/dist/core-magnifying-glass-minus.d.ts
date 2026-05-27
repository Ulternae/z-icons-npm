import React from 'react';

export interface CoreMagnifyingGlassMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreMagnifyingGlassMinus: React.FC<CoreMagnifyingGlassMinusProps>;
export default CoreMagnifyingGlassMinus;
