import React from 'react';

export interface LanClipboardCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClipboardCheckRegular(props: LanClipboardCheckRegularProps): React.ReactElement;
export default LanClipboardCheckRegular;
