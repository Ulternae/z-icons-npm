import React from 'react';

export interface NeoMobileSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoMobileSolid(props: NeoMobileSolidProps): React.ReactElement;
export default NeoMobileSolid;
