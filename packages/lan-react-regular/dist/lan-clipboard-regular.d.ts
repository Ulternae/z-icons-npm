import React from 'react';

export interface LanClipboardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClipboardRegular(props: LanClipboardRegularProps): React.ReactElement;
export default LanClipboardRegular;
