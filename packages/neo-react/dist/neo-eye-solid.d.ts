import React from 'react';

export interface NeoEyeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoEyeSolid(props: NeoEyeSolidProps): React.ReactElement;
export default NeoEyeSolid;
