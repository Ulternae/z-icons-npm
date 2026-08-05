import React from 'react';

export interface MinaClockFiveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaClockFive(props: MinaClockFiveProps): React.ReactElement;
export default MinaClockFive;
