import React from 'react';

export interface MinaClockHandProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaClockHand(props: MinaClockHandProps): React.ReactElement;
export default MinaClockHand;
