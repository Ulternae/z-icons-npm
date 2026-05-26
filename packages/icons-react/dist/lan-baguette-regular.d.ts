import React from 'react';

export interface LanBaguetteRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBaguetteRegular: React.FC<LanBaguetteRegularProps>;
export default LanBaguetteRegular;
