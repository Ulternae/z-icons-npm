import React from 'react';

export interface MinaInfoOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaInfoOctagon(props: MinaInfoOctagonProps): React.ReactElement;
export default MinaInfoOctagon;
