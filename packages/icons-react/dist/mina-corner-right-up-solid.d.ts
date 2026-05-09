import React from 'react';

export interface MinaCornerRightUpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCornerRightUpSolid: React.FC<MinaCornerRightUpSolidProps>;
export default MinaCornerRightUpSolid;
