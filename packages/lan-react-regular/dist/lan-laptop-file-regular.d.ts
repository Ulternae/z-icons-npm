import React from 'react';

export interface LanLaptopFileRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLaptopFileRegular(props: LanLaptopFileRegularProps): React.ReactElement;
export default LanLaptopFileRegular;
