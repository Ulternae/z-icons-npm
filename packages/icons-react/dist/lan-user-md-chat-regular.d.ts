import React from 'react';

export interface LanUserMdChatRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserMdChatRegular: React.FC<LanUserMdChatRegularProps>;
export default LanUserMdChatRegular;
