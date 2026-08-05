import React from 'react';

export interface LanUserMdChatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserMdChat(props: LanUserMdChatProps): React.ReactElement;
export default LanUserMdChat;
