import React from 'react';

export interface MinaHomeSmileProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHomeSmile: React.FC<MinaHomeSmileProps>;
export default MinaHomeSmile;
