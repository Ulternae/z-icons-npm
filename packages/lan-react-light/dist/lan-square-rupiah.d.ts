import React from 'react';

export interface LanSquareRupiahProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareRupiah(props: LanSquareRupiahProps): React.ReactElement;
export default LanSquareRupiah;
