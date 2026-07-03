import React from 'react';

export interface BruXmppProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruXmpp(props: BruXmppProps): React.ReactElement;
export default BruXmpp;
