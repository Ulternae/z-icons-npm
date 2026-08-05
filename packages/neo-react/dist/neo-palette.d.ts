import React from 'react';

export interface NeoPaletteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoPalette(props: NeoPaletteProps): React.ReactElement;
export default NeoPalette;
