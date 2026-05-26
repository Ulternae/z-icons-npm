import React from 'react';

export interface LanClipboardListRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClipboardListRegular: React.FC<LanClipboardListRegularProps>;
export default LanClipboardListRegular;
