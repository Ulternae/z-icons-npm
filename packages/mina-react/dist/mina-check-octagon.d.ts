import React from 'react';

export interface MinaCheckOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCheckOctagon(props: MinaCheckOctagonProps): React.ReactElement;
export default MinaCheckOctagon;
