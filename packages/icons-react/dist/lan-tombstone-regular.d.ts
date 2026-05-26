import React from 'react';

export interface LanTombstoneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTombstoneRegular: React.FC<LanTombstoneRegularProps>;
export default LanTombstoneRegular;
