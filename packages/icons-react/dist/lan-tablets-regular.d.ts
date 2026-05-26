import React from 'react';

export interface LanTabletsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTabletsRegular: React.FC<LanTabletsRegularProps>;
export default LanTabletsRegular;
