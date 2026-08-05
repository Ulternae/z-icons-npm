import React from 'react';

export interface NeoFontCaseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoFontCaseSolid(props: NeoFontCaseSolidProps): React.ReactElement;
export default NeoFontCaseSolid;
