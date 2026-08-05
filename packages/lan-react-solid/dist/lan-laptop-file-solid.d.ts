import React from 'react';

export interface LanLaptopFileSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLaptopFileSolid(props: LanLaptopFileSolidProps): React.ReactElement;
export default LanLaptopFileSolid;
