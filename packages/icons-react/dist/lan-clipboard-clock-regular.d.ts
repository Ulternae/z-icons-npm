import React from 'react';

export interface LanClipboardClockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClipboardClockRegular: React.FC<LanClipboardClockRegularProps>;
export default LanClipboardClockRegular;
