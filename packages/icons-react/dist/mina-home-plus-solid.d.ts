import React from 'react';

export interface MinaHomePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHomePlusSolid: React.FC<MinaHomePlusSolidProps>;
export default MinaHomePlusSolid;
