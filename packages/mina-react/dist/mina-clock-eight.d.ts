import React from 'react';

export interface MinaClockEightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaClockEight(props: MinaClockEightProps): React.ReactElement;
export default MinaClockEight;
