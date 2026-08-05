import React from 'react';

export interface MinaHashCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHashCircle(props: MinaHashCircleProps): React.ReactElement;
export default MinaHashCircle;
