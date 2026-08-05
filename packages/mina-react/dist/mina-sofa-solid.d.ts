import React from 'react';

export interface MinaSofaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSofaSolid(props: MinaSofaSolidProps): React.ReactElement;
export default MinaSofaSolid;
