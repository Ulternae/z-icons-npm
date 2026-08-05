import React from 'react';

export interface MinaZeroProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaZero(props: MinaZeroProps): React.ReactElement;
export default MinaZero;
