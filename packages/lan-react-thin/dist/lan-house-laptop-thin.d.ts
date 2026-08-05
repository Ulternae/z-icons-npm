import React from 'react';

export interface LanHouseLaptopThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseLaptopThin(props: LanHouseLaptopThinProps): React.ReactElement;
export default LanHouseLaptopThin;
