import React from 'react';

export interface MinaMessageCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMessageCheck: React.FC<MinaMessageCheckProps>;
export default MinaMessageCheck;
