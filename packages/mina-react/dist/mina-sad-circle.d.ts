import React from 'react';

export interface MinaSadCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSadCircle(props: MinaSadCircleProps): React.ReactElement;
export default MinaSadCircle;
