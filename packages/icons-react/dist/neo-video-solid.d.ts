import React from 'react';

export interface NeoVideoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoVideoSolid: React.FC<NeoVideoSolidProps>;
export default NeoVideoSolid;
