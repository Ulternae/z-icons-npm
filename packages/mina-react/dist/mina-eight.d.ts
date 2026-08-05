import React from 'react';

export interface MinaEightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEight(props: MinaEightProps): React.ReactElement;
export default MinaEight;
