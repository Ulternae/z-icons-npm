import React from 'react';

export interface MinaMessageReplyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMessageReply(props: MinaMessageReplyProps): React.ReactElement;
export default MinaMessageReply;
