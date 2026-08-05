import React from 'react';

export interface LanClipboardListSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClipboardListSolid(props: LanClipboardListSolidProps): React.ReactElement;
export default LanClipboardListSolid;
