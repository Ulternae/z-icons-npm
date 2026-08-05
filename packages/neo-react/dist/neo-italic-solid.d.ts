import React from 'react';

export interface NeoItalicSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoItalicSolid(props: NeoItalicSolidProps): React.ReactElement;
export default NeoItalicSolid;
