import React from 'react';

export interface LanPrintSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPrintSolid(props: LanPrintSolidProps): React.ReactElement;
export default LanPrintSolid;
