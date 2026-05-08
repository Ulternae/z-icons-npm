import React from 'react';

export interface MinaBankSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBankSolid: React.FC<MinaBankSolidProps>;
export default MinaBankSolid;
