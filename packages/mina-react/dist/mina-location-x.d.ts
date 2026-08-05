import React from 'react';

export interface MinaLocationXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLocationX(props: MinaLocationXProps): React.ReactElement;
export default MinaLocationX;
