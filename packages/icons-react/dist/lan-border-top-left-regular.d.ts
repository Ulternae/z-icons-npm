import React from 'react';

export interface LanBorderTopLeftRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderTopLeftRegular: React.FC<LanBorderTopLeftRegularProps>;
export default LanBorderTopLeftRegular;
