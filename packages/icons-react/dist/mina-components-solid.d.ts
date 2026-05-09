import React from 'react';

export interface MinaComponentsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaComponentsSolid: React.FC<MinaComponentsSolidProps>;
export default MinaComponentsSolid;
