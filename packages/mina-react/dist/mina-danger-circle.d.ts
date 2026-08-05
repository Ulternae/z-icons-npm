import React from 'react';

export interface MinaDangerCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDangerCircle(props: MinaDangerCircleProps): React.ReactElement;
export default MinaDangerCircle;
