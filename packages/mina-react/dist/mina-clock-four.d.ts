import React from 'react';

export interface MinaClockFourProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaClockFour(props: MinaClockFourProps): React.ReactElement;
export default MinaClockFour;
