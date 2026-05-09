import React from 'react';

export interface MinaEditSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEditSolid: React.FC<MinaEditSolidProps>;
export default MinaEditSolid;
