import React from 'react';

export interface NeoInboxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoInbox(props: NeoInboxProps): React.ReactElement;
export default NeoInbox;
