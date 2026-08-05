import React from 'react';

export interface MinaHomeMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHomeMinus(props: MinaHomeMinusProps): React.ReactElement;
export default MinaHomeMinus;
