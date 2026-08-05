import React from 'react';

export interface MinaScanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaScan(props: MinaScanProps): React.ReactElement;
export default MinaScan;
