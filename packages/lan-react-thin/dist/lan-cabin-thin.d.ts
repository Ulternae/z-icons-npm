import React from 'react';

export interface LanCabinThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCabinThin(props: LanCabinThinProps): React.ReactElement;
export default LanCabinThin;
