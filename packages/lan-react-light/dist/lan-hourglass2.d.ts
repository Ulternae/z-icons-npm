import React from 'react';

export interface LanHourglass2Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHourglass2(props: LanHourglass2Props): React.ReactElement;
export default LanHourglass2;
