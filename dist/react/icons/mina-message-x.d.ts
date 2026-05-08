import React from 'react';

export interface MinaMessageXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMessageX: React.FC<MinaMessageXProps>;
export default MinaMessageX;
