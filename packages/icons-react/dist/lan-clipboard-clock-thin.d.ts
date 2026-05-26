import React from 'react';

export interface LanClipboardClockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClipboardClockThin: React.FC<LanClipboardClockThinProps>;
export default LanClipboardClockThin;
