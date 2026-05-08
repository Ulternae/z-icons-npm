import React from 'react';

export interface MinaHomeCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHomeCheck: React.FC<MinaHomeCheckProps>;
export default MinaHomeCheck;
