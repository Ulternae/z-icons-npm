import React from 'react';

export interface CorePaletteRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePaletteRegularDuo(props: CorePaletteRegularDuoProps): React.ReactElement;
export default CorePaletteRegularDuo;
