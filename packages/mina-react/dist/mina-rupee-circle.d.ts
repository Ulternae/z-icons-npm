import React from 'react';

export interface MinaRupeeCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRupeeCircle(props: MinaRupeeCircleProps): React.ReactElement;
export default MinaRupeeCircle;
