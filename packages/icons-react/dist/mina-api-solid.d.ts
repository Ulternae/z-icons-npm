import React from 'react';

export interface MinaApiSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaApiSolid: React.FC<MinaApiSolidProps>;
export default MinaApiSolid;
