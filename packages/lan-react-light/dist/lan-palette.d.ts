import React from 'react';

export interface LanPaletteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPalette(props: LanPaletteProps): React.ReactElement;
export default LanPalette;
