import React from 'react';

export interface LanTreeDecoratedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTreeDecoratedSolid: React.FC<LanTreeDecoratedSolidProps>;
export default LanTreeDecoratedSolid;
