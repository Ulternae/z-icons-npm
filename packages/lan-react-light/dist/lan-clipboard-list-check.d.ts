import React from 'react';

export interface LanClipboardListCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClipboardListCheck(props: LanClipboardListCheckProps): React.ReactElement;
export default LanClipboardListCheck;
