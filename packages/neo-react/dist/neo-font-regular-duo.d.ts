import React from 'react';

export interface NeoFontRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoFontRegularDuo(props: NeoFontRegularDuoProps): React.ReactElement;
export default NeoFontRegularDuo;
