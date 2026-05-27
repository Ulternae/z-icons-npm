import React from 'react';

export interface NeoThumbsDownSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoThumbsDownSolid: React.FC<NeoThumbsDownSolidProps>;
export default NeoThumbsDownSolid;
