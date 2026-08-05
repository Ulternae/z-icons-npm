import React from 'react';

export interface LanPiscesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPiscesRegular(props: LanPiscesRegularProps): React.ReactElement;
export default LanPiscesRegular;
