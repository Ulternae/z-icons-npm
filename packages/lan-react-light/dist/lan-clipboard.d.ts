import React from 'react';

export interface LanClipboardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClipboard(props: LanClipboardProps): React.ReactElement;
export default LanClipboard;
