import React from 'react';

export interface MinaBookXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBookXSolid: React.FC<MinaBookXSolidProps>;
export default MinaBookXSolid;
