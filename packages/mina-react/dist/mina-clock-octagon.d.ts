import React from 'react';

export interface MinaClockOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaClockOctagon(props: MinaClockOctagonProps): React.ReactElement;
export default MinaClockOctagon;
