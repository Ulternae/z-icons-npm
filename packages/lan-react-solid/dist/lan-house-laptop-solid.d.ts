import React from 'react';

export interface LanHouseLaptopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseLaptopSolid(props: LanHouseLaptopSolidProps): React.ReactElement;
export default LanHouseLaptopSolid;
