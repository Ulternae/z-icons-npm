import React from 'react';

export interface MinaChatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChat(props: MinaChatProps): React.ReactElement;
export default MinaChat;
