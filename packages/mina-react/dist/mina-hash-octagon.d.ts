import React from 'react';

export interface MinaHashOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHashOctagon(props: MinaHashOctagonProps): React.ReactElement;
export default MinaHashOctagon;
