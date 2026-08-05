import React from 'react';

export interface LanClipboardUserRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClipboardUserRegular(props: LanClipboardUserRegularProps): React.ReactElement;
export default LanClipboardUserRegular;
