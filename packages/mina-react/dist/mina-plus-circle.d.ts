import React from 'react';

export interface MinaPlusCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPlusCircle(props: MinaPlusCircleProps): React.ReactElement;
export default MinaPlusCircle;
