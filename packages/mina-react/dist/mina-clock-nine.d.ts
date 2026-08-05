import React from 'react';

export interface MinaClockNineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaClockNine(props: MinaClockNineProps): React.ReactElement;
export default MinaClockNine;
