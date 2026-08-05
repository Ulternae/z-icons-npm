import React from 'react';

export interface LanPaletteRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPaletteRegular(props: LanPaletteRegularProps): React.ReactElement;
export default LanPaletteRegular;
