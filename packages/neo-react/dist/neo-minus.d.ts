import React from 'react';

export interface NeoMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoMinus(props: NeoMinusProps): React.ReactElement;
export default NeoMinus;
