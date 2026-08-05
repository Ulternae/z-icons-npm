import React from 'react';

export interface MinaOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaOctagon(props: MinaOctagonProps): React.ReactElement;
export default MinaOctagon;
