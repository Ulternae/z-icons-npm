import React from 'react';

export interface MinaXOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaXOctagon(props: MinaXOctagonProps): React.ReactElement;
export default MinaXOctagon;
