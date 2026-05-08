import React from 'react';

export interface MinaInboxDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaInboxDown: React.FC<MinaInboxDownProps>;
export default MinaInboxDown;
