import React from 'react';

export interface MinaBrandFramerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBrandFramer: React.FC<MinaBrandFramerProps>;
export default MinaBrandFramer;
