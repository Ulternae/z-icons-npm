import React from 'react';

export interface MinaBrandXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBrandX: React.FC<MinaBrandXProps>;
export default MinaBrandX;
