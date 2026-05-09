import React from 'react';

export interface MinaCartMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCartMinusSolid: React.FC<MinaCartMinusSolidProps>;
export default MinaCartMinusSolid;
