import React from 'react';

export interface LanPrintRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPrintRegular(props: LanPrintRegularProps): React.ReactElement;
export default LanPrintRegular;
