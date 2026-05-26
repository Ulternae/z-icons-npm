import React from 'react';

export interface LanTaurusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTaurusRegular: React.FC<LanTaurusRegularProps>;
export default LanTaurusRegular;
