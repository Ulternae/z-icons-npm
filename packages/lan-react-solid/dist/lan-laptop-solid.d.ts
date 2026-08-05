import React from 'react';

export interface LanLaptopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLaptopSolid(props: LanLaptopSolidProps): React.ReactElement;
export default LanLaptopSolid;
