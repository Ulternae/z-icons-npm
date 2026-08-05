import React from 'react';

export interface MinaInboxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaInbox(props: MinaInboxProps): React.ReactElement;
export default MinaInbox;
