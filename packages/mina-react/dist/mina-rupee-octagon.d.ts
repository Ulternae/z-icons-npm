import React from 'react';

export interface MinaRupeeOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRupeeOctagon(props: MinaRupeeOctagonProps): React.ReactElement;
export default MinaRupeeOctagon;
