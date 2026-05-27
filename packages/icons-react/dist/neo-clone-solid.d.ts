import React from 'react';

export interface NeoCloneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCloneSolid: React.FC<NeoCloneSolidProps>;
export default NeoCloneSolid;
