import React from 'react';

export interface MinaCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCircle(props: MinaCircleProps): React.ReactElement;
export default MinaCircle;
