import React from 'react';

export interface MinaHomeXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHomeX: React.FC<MinaHomeXProps>;
export default MinaHomeX;
