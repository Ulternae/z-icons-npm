import React from 'react';

export interface LanClipboardUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClipboardUser: React.FC<LanClipboardUserProps>;
export default LanClipboardUser;
