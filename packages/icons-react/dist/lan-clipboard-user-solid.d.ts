import React from 'react';

export interface LanClipboardUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClipboardUserSolid: React.FC<LanClipboardUserSolidProps>;
export default LanClipboardUserSolid;
