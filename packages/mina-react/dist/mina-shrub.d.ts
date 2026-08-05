import React from 'react';

export interface MinaShrubProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaShrub(props: MinaShrubProps): React.ReactElement;
export default MinaShrub;
