import React from 'react';

export interface LanClipboardClockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClipboardClockThin(props: LanClipboardClockThinProps): React.ReactElement;
export default LanClipboardClockThin;
