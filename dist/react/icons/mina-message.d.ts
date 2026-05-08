import React from 'react';

export interface MinaMessageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMessage: React.FC<MinaMessageProps>;
export default MinaMessage;
