import React from 'react';

export interface MinaEarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEar(props: MinaEarProps): React.ReactElement;
export default MinaEar;
