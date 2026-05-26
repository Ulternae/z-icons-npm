import React from 'react';

export interface LanBorderAllRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderAllRegular: React.FC<LanBorderAllRegularProps>;
export default LanBorderAllRegular;
