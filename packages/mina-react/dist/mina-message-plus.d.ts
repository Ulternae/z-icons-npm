import React from 'react';

export interface MinaMessagePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMessagePlus(props: MinaMessagePlusProps): React.ReactElement;
export default MinaMessagePlus;
