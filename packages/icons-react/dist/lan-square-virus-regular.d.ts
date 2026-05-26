import React from 'react';

export interface LanSquareVirusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareVirusRegular: React.FC<LanSquareVirusRegularProps>;
export default LanSquareVirusRegular;
