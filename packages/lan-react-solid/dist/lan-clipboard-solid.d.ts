import React from 'react';

export interface LanClipboardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClipboardSolid(props: LanClipboardSolidProps): React.ReactElement;
export default LanClipboardSolid;
