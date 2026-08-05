import React from 'react';

export interface LanHourglass1Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHourglass1(props: LanHourglass1Props): React.ReactElement;
export default LanHourglass1;
