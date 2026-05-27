import React from 'react';

export interface NeoThumbtackSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoThumbtackSolid: React.FC<NeoThumbtackSolidProps>;
export default NeoThumbtackSolid;
