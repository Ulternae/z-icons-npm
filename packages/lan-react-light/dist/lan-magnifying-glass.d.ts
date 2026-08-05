import React from 'react';

export interface LanMagnifyingGlassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMagnifyingGlass(props: LanMagnifyingGlassProps): React.ReactElement;
export default LanMagnifyingGlass;
