import React from 'react';

export interface MinaWindsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaWindsSolid: React.FC<MinaWindsSolidProps>;
export default MinaWindsSolid;
