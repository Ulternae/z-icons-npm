import React from 'react';

export interface NeoFontProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoFont(props: NeoFontProps): React.ReactElement;
export default NeoFont;
