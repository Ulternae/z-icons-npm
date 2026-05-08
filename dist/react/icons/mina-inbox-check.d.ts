import React from 'react';

export interface MinaInboxCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaInboxCheck: React.FC<MinaInboxCheckProps>;
export default MinaInboxCheck;
