import React from 'react';

export interface MinaInboxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaInbox: React.FC<MinaInboxProps>;
export default MinaInbox;
