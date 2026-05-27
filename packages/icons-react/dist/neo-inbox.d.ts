import React from 'react';

export interface NeoInboxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoInbox: React.FC<NeoInboxProps>;
export default NeoInbox;
