import React from 'react';

export interface MinaMessageXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMessageXSolid: React.FC<MinaMessageXSolidProps>;
export default MinaMessageXSolid;
