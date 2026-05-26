import React from 'react';

export interface LanBorderRightRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderRightRegular: React.FC<LanBorderRightRegularProps>;
export default LanBorderRightRegular;
