import React from 'react';

export interface LanClipboardClockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClipboardClock(props: LanClipboardClockProps): React.ReactElement;
export default LanClipboardClock;
