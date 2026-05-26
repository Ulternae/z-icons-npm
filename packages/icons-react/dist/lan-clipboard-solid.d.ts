import React from 'react';

export interface LanClipboardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClipboardSolid: React.FC<LanClipboardSolidProps>;
export default LanClipboardSolid;
