import React from 'react';

export interface MinaZeroOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaZeroOctagon(props: MinaZeroOctagonProps): React.ReactElement;
export default MinaZeroOctagon;
