import React from 'react';

export interface MinaCupcakeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCupcake(props: MinaCupcakeProps): React.ReactElement;
export default MinaCupcake;
