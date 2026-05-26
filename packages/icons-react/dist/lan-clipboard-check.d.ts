import React from 'react';

export interface LanClipboardCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClipboardCheck: React.FC<LanClipboardCheckProps>;
export default LanClipboardCheck;
