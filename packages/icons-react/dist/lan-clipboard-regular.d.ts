import React from 'react';

export interface LanClipboardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClipboardRegular: React.FC<LanClipboardRegularProps>;
export default LanClipboardRegular;
