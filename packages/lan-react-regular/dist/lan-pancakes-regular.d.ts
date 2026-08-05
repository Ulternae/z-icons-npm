import React from 'react';

export interface LanPancakesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPancakesRegular(props: LanPancakesRegularProps): React.ReactElement;
export default LanPancakesRegular;
