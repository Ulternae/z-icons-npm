import React from 'react';

export interface LanFileClipboardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileClipboardSolid(props: LanFileClipboardSolidProps): React.ReactElement;
export default LanFileClipboardSolid;
