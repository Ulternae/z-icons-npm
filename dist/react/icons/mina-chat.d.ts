import React from 'react';

export interface MinaChatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChat: React.FC<MinaChatProps>;
export default MinaChat;
