import React from 'react';

export interface LanClipboardUserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClipboardUserThin(props: LanClipboardUserThinProps): React.ReactElement;
export default LanClipboardUserThin;
