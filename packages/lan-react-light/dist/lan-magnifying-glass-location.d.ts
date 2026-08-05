import React from 'react';

export interface LanMagnifyingGlassLocationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMagnifyingGlassLocation(props: LanMagnifyingGlassLocationProps): React.ReactElement;
export default LanMagnifyingGlassLocation;
