import React from 'react';

export interface LanPrintMagnifyingGlassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPrintMagnifyingGlass(props: LanPrintMagnifyingGlassProps): React.ReactElement;
export default LanPrintMagnifyingGlass;
