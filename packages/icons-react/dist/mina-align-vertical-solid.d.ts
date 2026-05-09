import React from 'react';

export interface MinaAlignVerticalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAlignVerticalSolid: React.FC<MinaAlignVerticalSolidProps>;
export default MinaAlignVerticalSolid;
