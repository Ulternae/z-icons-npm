import React from 'react';

export interface LanClipboardListThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClipboardListThin(props: LanClipboardListThinProps): React.ReactElement;
export default LanClipboardListThin;
