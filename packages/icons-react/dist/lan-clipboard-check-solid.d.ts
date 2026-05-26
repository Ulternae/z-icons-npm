import React from 'react';

export interface LanClipboardCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClipboardCheckSolid: React.FC<LanClipboardCheckSolidProps>;
export default LanClipboardCheckSolid;
