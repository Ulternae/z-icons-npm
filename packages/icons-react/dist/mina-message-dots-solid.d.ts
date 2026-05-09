import React from 'react';

export interface MinaMessageDotsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMessageDotsSolid: React.FC<MinaMessageDotsSolidProps>;
export default MinaMessageDotsSolid;
