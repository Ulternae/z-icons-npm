import React from 'react';

export interface MinaBoxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBox: React.FC<MinaBoxProps>;
export default MinaBox;
