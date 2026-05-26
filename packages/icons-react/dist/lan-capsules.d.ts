import React from 'react';

export interface LanCapsulesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCapsules: React.FC<LanCapsulesProps>;
export default LanCapsules;
