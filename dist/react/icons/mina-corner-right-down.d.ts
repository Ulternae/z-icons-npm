import React from 'react';

export interface MinaCornerRightDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCornerRightDown: React.FC<MinaCornerRightDownProps>;
export default MinaCornerRightDown;
