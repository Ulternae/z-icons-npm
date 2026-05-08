import React from 'react';

export interface MinaCornerDownRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCornerDownRight: React.FC<MinaCornerDownRightProps>;
export default MinaCornerDownRight;
