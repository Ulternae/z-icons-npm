import React from 'react';

export interface MinaMessageMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMessageMinusSolid: React.FC<MinaMessageMinusSolidProps>;
export default MinaMessageMinusSolid;
