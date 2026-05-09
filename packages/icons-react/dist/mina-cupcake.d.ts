import React from 'react';

export interface MinaCupcakeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCupcake: React.FC<MinaCupcakeProps>;
export default MinaCupcake;
