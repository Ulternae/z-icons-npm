import React from 'react';

export interface BruXmppProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruXmpp: React.FC<BruXmppProps>;
export default BruXmpp;
