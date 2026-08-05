import React from 'react';

export interface MinaChatMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChatMinus(props: MinaChatMinusProps): React.ReactElement;
export default MinaChatMinus;
