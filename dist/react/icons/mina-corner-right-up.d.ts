import React from 'react';

export interface MinaCornerRightUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCornerRightUp: React.FC<MinaCornerRightUpProps>;
export default MinaCornerRightUp;
