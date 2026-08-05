import React from 'react';

export interface LanClipboardCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClipboardCheck(props: LanClipboardCheckProps): React.ReactElement;
export default LanClipboardCheck;
