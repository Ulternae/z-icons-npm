import React from 'react';

export interface MinaThreeCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaThreeCircle(props: MinaThreeCircleProps): React.ReactElement;
export default MinaThreeCircle;
