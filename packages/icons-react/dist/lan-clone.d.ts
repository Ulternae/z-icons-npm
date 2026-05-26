import React from 'react';

export interface LanCloneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClone: React.FC<LanCloneProps>;
export default LanClone;
