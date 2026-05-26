import React from 'react';

export interface LanGlobePointerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlobePointerSolid: React.FC<LanGlobePointerSolidProps>;
export default LanGlobePointerSolid;
