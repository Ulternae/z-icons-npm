import React from 'react';

export interface LanBedBunkRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBedBunkRegular: React.FC<LanBedBunkRegularProps>;
export default LanBedBunkRegular;
