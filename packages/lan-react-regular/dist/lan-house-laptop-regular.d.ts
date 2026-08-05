import React from 'react';

export interface LanHouseLaptopRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseLaptopRegular(props: LanHouseLaptopRegularProps): React.ReactElement;
export default LanHouseLaptopRegular;
