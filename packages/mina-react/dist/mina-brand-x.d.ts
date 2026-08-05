import React from 'react';

export interface MinaBrandXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBrandX(props: MinaBrandXProps): React.ReactElement;
export default MinaBrandX;
