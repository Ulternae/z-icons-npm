import React from 'react';

export interface MinaMessageReplyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMessageReply: React.FC<MinaMessageReplyProps>;
export default MinaMessageReply;
