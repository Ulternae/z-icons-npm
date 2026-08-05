import React from 'react';

export interface LanLaptopBinaryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLaptopBinary(props: LanLaptopBinaryProps): React.ReactElement;
export default LanLaptopBinary;
