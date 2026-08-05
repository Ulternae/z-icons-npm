import React from 'react';

export interface LanHouseLaptopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseLaptop(props: LanHouseLaptopProps): React.ReactElement;
export default LanHouseLaptop;
