import React from 'react';

export interface LanFileClipboardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileClipboard(props: LanFileClipboardProps): React.ReactElement;
export default LanFileClipboard;
