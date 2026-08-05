import React from 'react';

export interface NeoBookSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBookSolid(props: NeoBookSolidProps): React.ReactElement;
export default NeoBookSolid;
