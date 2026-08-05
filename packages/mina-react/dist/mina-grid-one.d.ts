import React from 'react';

export interface MinaGridOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaGridOne(props: MinaGridOneProps): React.ReactElement;
export default MinaGridOne;
