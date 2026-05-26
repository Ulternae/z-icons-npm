import React from 'react';

export interface LanUserMdChatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserMdChat: React.FC<LanUserMdChatProps>;
export default LanUserMdChat;
