import React from 'react';

export interface LanHandPointerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandPointerSolid: React.FC<LanHandPointerSolidProps>;
export default LanHandPointerSolid;
