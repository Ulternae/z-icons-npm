import React from 'react';

export interface LanNfcMagnifyingGlassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNfcMagnifyingGlass(props: LanNfcMagnifyingGlassProps): React.ReactElement;
export default LanNfcMagnifyingGlass;
