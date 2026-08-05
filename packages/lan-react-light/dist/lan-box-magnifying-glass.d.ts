import React from 'react';

export interface LanBoxMagnifyingGlassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxMagnifyingGlass(props: LanBoxMagnifyingGlassProps): React.ReactElement;
export default LanBoxMagnifyingGlass;
