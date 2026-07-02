import React from 'react';

export interface CoreInboxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreInbox(props: CoreInboxProps): React.ReactElement;
export default CoreInbox;
