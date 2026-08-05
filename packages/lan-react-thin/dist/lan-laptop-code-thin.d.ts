import React from 'react';

export interface LanLaptopCodeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLaptopCodeThin(props: LanLaptopCodeThinProps): React.ReactElement;
export default LanLaptopCodeThin;
