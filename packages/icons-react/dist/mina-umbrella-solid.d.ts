import React from 'react';

export interface MinaUmbrellaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaUmbrellaSolid: React.FC<MinaUmbrellaSolidProps>;
export default MinaUmbrellaSolid;
