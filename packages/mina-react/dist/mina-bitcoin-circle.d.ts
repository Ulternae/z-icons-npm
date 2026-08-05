import React from 'react';

export interface MinaBitcoinCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBitcoinCircle(props: MinaBitcoinCircleProps): React.ReactElement;
export default MinaBitcoinCircle;
