import React from 'react';

export interface MinaRhombusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRhombus(props: MinaRhombusProps): React.ReactElement;
export default MinaRhombus;
