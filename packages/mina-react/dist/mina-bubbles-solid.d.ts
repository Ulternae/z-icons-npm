import React from 'react';

export interface MinaBubblesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBubblesSolid(props: MinaBubblesSolidProps): React.ReactElement;
export default MinaBubblesSolid;
