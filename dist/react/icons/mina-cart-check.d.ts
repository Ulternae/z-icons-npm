import React from 'react';

export interface MinaCartCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCartCheck: React.FC<MinaCartCheckProps>;
export default MinaCartCheck;
