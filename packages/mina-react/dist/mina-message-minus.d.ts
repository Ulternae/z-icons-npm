import React from 'react';

export interface MinaMessageMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMessageMinus(props: MinaMessageMinusProps): React.ReactElement;
export default MinaMessageMinus;
