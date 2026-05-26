import React from 'react';

export interface LanStrikethroughSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStrikethroughSolid: React.FC<LanStrikethroughSolidProps>;
export default LanStrikethroughSolid;
