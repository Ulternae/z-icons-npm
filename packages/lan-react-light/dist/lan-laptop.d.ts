import React from 'react';

export interface LanLaptopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLaptop(props: LanLaptopProps): React.ReactElement;
export default LanLaptop;
