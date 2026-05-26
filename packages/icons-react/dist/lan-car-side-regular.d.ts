import React from 'react';

export interface LanCarSideRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarSideRegular: React.FC<LanCarSideRegularProps>;
export default LanCarSideRegular;
