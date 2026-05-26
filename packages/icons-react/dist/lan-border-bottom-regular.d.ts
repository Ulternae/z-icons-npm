import React from 'react';

export interface LanBorderBottomRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderBottomRegular: React.FC<LanBorderBottomRegularProps>;
export default LanBorderBottomRegular;
