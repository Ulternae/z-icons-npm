import React from 'react';

export interface MinaOneOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaOneOctagon(props: MinaOneOctagonProps): React.ReactElement;
export default MinaOneOctagon;
