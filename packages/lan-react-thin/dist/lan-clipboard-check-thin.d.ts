import React from 'react';

export interface LanClipboardCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClipboardCheckThin(props: LanClipboardCheckThinProps): React.ReactElement;
export default LanClipboardCheckThin;
