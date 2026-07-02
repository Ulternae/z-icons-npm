import React from 'react';

export interface CoreMagnifyingGlassPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreMagnifyingGlassPlus(props: CoreMagnifyingGlassPlusProps): React.ReactElement;
export default CoreMagnifyingGlassPlus;
