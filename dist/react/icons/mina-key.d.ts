import React from 'react';

export interface MinaKeyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaKey: React.FC<MinaKeyProps>;
export default MinaKey;
