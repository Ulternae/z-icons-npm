import React from 'react';

export interface MinaServersSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaServersSolid: React.FC<MinaServersSolidProps>;
export default MinaServersSolid;
