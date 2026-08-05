import React from 'react';

export interface MinaMinusOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMinusOctagon(props: MinaMinusOctagonProps): React.ReactElement;
export default MinaMinusOctagon;
