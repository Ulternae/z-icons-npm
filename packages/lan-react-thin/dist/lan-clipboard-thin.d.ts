import React from 'react';

export interface LanClipboardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClipboardThin(props: LanClipboardThinProps): React.ReactElement;
export default LanClipboardThin;
