import React from 'react';

export interface MinaClockTwoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaClockTwo(props: MinaClockTwoProps): React.ReactElement;
export default MinaClockTwo;
