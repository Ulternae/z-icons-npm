import React from 'react';

export interface NeoVolumeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoVolumeSolid: React.FC<NeoVolumeSolidProps>;
export default NeoVolumeSolid;
