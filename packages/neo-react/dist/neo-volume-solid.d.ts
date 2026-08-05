import React from 'react';

export interface NeoVolumeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoVolumeSolid(props: NeoVolumeSolidProps): React.ReactElement;
export default NeoVolumeSolid;
