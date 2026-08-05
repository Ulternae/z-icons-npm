import React from 'react';

export interface LanLaptopRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLaptopRegular(props: LanLaptopRegularProps): React.ReactElement;
export default LanLaptopRegular;
