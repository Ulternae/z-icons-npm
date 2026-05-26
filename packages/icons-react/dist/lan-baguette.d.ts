import React from 'react';

export interface LanBaguetteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBaguette: React.FC<LanBaguetteProps>;
export default LanBaguette;
