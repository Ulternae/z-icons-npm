import React from 'react';

export interface LanBadmintonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBadmintonRegular: React.FC<LanBadmintonRegularProps>;
export default LanBadmintonRegular;
