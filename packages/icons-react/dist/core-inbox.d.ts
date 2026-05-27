import React from 'react';

export interface CoreInboxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreInbox: React.FC<CoreInboxProps>;
export default CoreInbox;
