import React from 'react';

export interface LanUserMdChatThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserMdChatThin: React.FC<LanUserMdChatThinProps>;
export default LanUserMdChatThin;
