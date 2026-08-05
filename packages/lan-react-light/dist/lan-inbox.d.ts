import React from 'react';

export interface LanInboxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInbox(props: LanInboxProps): React.ReactElement;
export default LanInbox;
