import React from 'react';

export interface MinaCornerUpLeftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCornerUpLeftSolid: React.FC<MinaCornerUpLeftSolidProps>;
export default MinaCornerUpLeftSolid;
