import React from 'react';

export interface LanClipboardListSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClipboardListSolid: React.FC<LanClipboardListSolidProps>;
export default LanClipboardListSolid;
