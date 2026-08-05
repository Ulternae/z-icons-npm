import React from 'react';

export interface MinaMoonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMoon(props: MinaMoonProps): React.ReactElement;
export default MinaMoon;
