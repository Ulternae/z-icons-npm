import React from 'react';

export interface MinaMessageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMessageSolid: React.FC<MinaMessageSolidProps>;
export default MinaMessageSolid;
