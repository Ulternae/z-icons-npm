import React from 'react';

export interface MinaCornerUpRightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCornerUpRightSolid: React.FC<MinaCornerUpRightSolidProps>;
export default MinaCornerUpRightSolid;
