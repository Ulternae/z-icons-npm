import React from 'react';

export interface LanBusSideRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBusSideRegular: React.FC<LanBusSideRegularProps>;
export default LanBusSideRegular;
