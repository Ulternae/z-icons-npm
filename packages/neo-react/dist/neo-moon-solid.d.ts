import React from 'react';

export interface NeoMoonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoMoonSolid(props: NeoMoonSolidProps): React.ReactElement;
export default NeoMoonSolid;
