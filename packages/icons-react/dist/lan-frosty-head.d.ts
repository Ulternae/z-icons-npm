import React from 'react';

export interface LanFrostyHeadProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFrostyHead: React.FC<LanFrostyHeadProps>;
export default LanFrostyHead;
