import React from 'react';

export interface NeoSunSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoSunSolid(props: NeoSunSolidProps): React.ReactElement;
export default NeoSunSolid;
