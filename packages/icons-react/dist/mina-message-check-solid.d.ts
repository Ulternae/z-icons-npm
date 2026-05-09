import React from 'react';

export interface MinaMessageCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMessageCheckSolid: React.FC<MinaMessageCheckSolidProps>;
export default MinaMessageCheckSolid;
