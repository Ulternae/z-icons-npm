import React from 'react';

export interface LanBlanketFireRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlanketFireRegular: React.FC<LanBlanketFireRegularProps>;
export default LanBlanketFireRegular;
