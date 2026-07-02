import React from 'react';

export interface CorePaletteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePalette(props: CorePaletteProps): React.ReactElement;
export default CorePalette;
