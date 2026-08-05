import React from 'react';

export interface LanPiRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPiRegular(props: LanPiRegularProps): React.ReactElement;
export default LanPiRegular;
