import React from 'react';

export interface LanUserMagnifyingGlassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserMagnifyingGlass(props: LanUserMagnifyingGlassProps): React.ReactElement;
export default LanUserMagnifyingGlass;
