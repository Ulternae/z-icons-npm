import React from 'react';

export interface MinaTvProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTv(props: MinaTvProps): React.ReactElement;
export default MinaTv;
