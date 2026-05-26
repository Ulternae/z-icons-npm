import React from 'react';

export interface LanClipboardClockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClipboardClock: React.FC<LanClipboardClockProps>;
export default LanClipboardClock;
