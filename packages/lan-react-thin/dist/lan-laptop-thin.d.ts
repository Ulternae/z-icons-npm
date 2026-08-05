import React from 'react';

export interface LanLaptopThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLaptopThin(props: LanLaptopThinProps): React.ReactElement;
export default LanLaptopThin;
