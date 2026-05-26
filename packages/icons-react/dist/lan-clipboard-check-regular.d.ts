import React from 'react';

export interface LanClipboardCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClipboardCheckRegular: React.FC<LanClipboardCheckRegularProps>;
export default LanClipboardCheckRegular;
