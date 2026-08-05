import React from 'react';

export interface LanPepperRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPepperRegular(props: LanPepperRegularProps): React.ReactElement;
export default LanPepperRegular;
