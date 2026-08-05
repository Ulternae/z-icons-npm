import React from 'react';

export interface LanLaptopCodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLaptopCode(props: LanLaptopCodeProps): React.ReactElement;
export default LanLaptopCode;
