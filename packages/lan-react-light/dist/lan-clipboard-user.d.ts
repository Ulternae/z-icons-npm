import React from 'react';

export interface LanClipboardUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClipboardUser(props: LanClipboardUserProps): React.ReactElement;
export default LanClipboardUser;
