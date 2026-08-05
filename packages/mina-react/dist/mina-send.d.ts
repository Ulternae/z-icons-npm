import React from 'react';

export interface MinaSendProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSend(props: MinaSendProps): React.ReactElement;
export default MinaSend;
