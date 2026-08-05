import React from 'react';

export interface MinaClockSixProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaClockSix(props: MinaClockSixProps): React.ReactElement;
export default MinaClockSix;
