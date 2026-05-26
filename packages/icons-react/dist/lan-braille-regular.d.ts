import React from 'react';

export interface LanBrailleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBrailleRegular: React.FC<LanBrailleRegularProps>;
export default LanBrailleRegular;
