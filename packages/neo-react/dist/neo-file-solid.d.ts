import React from 'react';

export interface NeoFileSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoFileSolid(props: NeoFileSolidProps): React.ReactElement;
export default NeoFileSolid;
