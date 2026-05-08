import React from 'react';

export interface MinaDotsVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDotsVertical: React.FC<MinaDotsVerticalProps>;
export default MinaDotsVertical;
