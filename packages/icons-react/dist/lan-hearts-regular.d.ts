import React from 'react';

export interface LanHeartsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeartsRegular: React.FC<LanHeartsRegularProps>;
export default LanHeartsRegular;
