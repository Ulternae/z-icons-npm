import React from 'react';

export interface LanHeadSideHeartRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeadSideHeartRegular: React.FC<LanHeadSideHeartRegularProps>;
export default LanHeadSideHeartRegular;
