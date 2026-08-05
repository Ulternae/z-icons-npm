import React from 'react';

export interface NeoSuitcaseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoSuitcaseSolid(props: NeoSuitcaseSolidProps): React.ReactElement;
export default NeoSuitcaseSolid;
