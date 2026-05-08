import React from 'react';

export interface MinaCogOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCogOne: React.FC<MinaCogOneProps>;
export default MinaCogOne;
