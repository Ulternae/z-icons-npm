import React from 'react';

export interface LanMailReplyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMailReply(props: LanMailReplyProps): React.ReactElement;
export default LanMailReply;
