import React from 'react';

export interface MinaSunProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSun(props: MinaSunProps): React.ReactElement;
export default MinaSun;
