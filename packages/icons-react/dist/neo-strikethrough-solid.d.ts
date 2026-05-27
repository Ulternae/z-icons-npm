import React from 'react';

export interface NeoStrikethroughSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoStrikethroughSolid: React.FC<NeoStrikethroughSolidProps>;
export default NeoStrikethroughSolid;
