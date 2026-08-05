import React from 'react';

export interface MinaPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPlus(props: MinaPlusProps): React.ReactElement;
export default MinaPlus;
