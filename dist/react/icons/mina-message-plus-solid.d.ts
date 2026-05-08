import React from 'react';

export interface MinaMessagePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMessagePlusSolid: React.FC<MinaMessagePlusSolidProps>;
export default MinaMessagePlusSolid;
