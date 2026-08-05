import React from 'react';

export interface LanPepperHotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPepperHotRegular(props: LanPepperHotRegularProps): React.ReactElement;
export default LanPepperHotRegular;
