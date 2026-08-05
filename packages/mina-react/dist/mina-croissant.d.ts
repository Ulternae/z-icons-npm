import React from 'react';

export interface MinaCroissantProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCroissant(props: MinaCroissantProps): React.ReactElement;
export default MinaCroissant;
