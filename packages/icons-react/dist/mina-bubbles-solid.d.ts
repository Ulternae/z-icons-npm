import React from 'react';

export interface MinaBubblesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBubblesSolid: React.FC<MinaBubblesSolidProps>;
export default MinaBubblesSolid;
