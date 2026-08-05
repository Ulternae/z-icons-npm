import React from 'react';

export interface MinaSevenOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSevenOctagon(props: MinaSevenOctagonProps): React.ReactElement;
export default MinaSevenOctagon;
