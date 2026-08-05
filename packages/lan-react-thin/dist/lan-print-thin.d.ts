import React from 'react';

export interface LanPrintThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPrintThin(props: LanPrintThinProps): React.ReactElement;
export default LanPrintThin;
