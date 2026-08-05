import React from 'react';

export interface NeoFontSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoFontSolid(props: NeoFontSolidProps): React.ReactElement;
export default NeoFontSolid;
