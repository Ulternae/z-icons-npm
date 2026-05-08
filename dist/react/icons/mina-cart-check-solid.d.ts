import React from 'react';

export interface MinaCartCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCartCheckSolid: React.FC<MinaCartCheckSolidProps>;
export default MinaCartCheckSolid;
