import React from 'react';

export interface LanPrintProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPrint(props: LanPrintProps): React.ReactElement;
export default LanPrint;
