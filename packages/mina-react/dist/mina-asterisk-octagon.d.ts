import React from 'react';

export interface MinaAsteriskOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAsteriskOctagon(props: MinaAsteriskOctagonProps): React.ReactElement;
export default MinaAsteriskOctagon;
