import React from 'react';

export interface LanTruckSuvThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckSuvThin(props: LanTruckSuvThinProps): React.ReactElement;
export default LanTruckSuvThin;
