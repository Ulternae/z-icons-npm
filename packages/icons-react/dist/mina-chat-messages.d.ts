import React from 'react';

export interface MinaChatMessagesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChatMessages: React.FC<MinaChatMessagesProps>;
export default MinaChatMessages;
