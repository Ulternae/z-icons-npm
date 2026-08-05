import React from 'react';

export interface LanPaperclipRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPaperclipRegular(props: LanPaperclipRegularProps): React.ReactElement;
export default LanPaperclipRegular;
