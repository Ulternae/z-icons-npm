import React from 'react';

export interface MinaTreeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTreeSolid: React.FC<MinaTreeSolidProps>;
export default MinaTreeSolid;
