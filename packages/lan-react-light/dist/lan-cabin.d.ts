import React from 'react';

export interface LanCabinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCabin(props: LanCabinProps): React.ReactElement;
export default LanCabin;
