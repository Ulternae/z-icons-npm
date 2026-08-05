import React from 'react';

export interface LanClipboardUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClipboardUserSolid(props: LanClipboardUserSolidProps): React.ReactElement;
export default LanClipboardUserSolid;
