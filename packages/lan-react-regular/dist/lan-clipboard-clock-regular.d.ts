import React from 'react';

export interface LanClipboardClockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClipboardClockRegular(props: LanClipboardClockRegularProps): React.ReactElement;
export default LanClipboardClockRegular;
