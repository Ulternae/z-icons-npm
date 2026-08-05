import React from 'react';

export interface MinaEightOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEightOctagon(props: MinaEightOctagonProps): React.ReactElement;
export default MinaEightOctagon;
