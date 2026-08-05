import React from 'react';

export interface LanFileClipboardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileClipboardRegular(props: LanFileClipboardRegularProps): React.ReactElement;
export default LanFileClipboardRegular;
