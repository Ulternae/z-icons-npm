import React from 'react';

export interface CoreMagnifyingGlassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreMagnifyingGlass: React.FC<CoreMagnifyingGlassProps>;
export default CoreMagnifyingGlass;
