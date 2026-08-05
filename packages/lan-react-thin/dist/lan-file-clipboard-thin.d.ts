import React from 'react';

export interface LanFileClipboardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileClipboardThin(props: LanFileClipboardThinProps): React.ReactElement;
export default LanFileClipboardThin;
