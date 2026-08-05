import React from 'react';

export interface MinaCoffeeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCoffee(props: MinaCoffeeProps): React.ReactElement;
export default MinaCoffee;
