import React from 'react';

export interface MinaClockCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaClockCircle(props: MinaClockCircleProps): React.ReactElement;
export default MinaClockCircle;
