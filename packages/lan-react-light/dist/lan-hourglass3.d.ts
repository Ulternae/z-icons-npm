import React from 'react';

export interface LanHourglass3Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHourglass3(props: LanHourglass3Props): React.ReactElement;
export default LanHourglass3;
