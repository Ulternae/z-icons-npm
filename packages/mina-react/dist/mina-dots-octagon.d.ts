import React from 'react';

export interface MinaDotsOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDotsOctagon(props: MinaDotsOctagonProps): React.ReactElement;
export default MinaDotsOctagon;
