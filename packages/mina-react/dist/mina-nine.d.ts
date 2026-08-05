import React from 'react';

export interface MinaNineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaNine(props: MinaNineProps): React.ReactElement;
export default MinaNine;
