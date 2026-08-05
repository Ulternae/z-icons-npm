import React from 'react';

export interface MinaDotsCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDotsCircle(props: MinaDotsCircleProps): React.ReactElement;
export default MinaDotsCircle;
