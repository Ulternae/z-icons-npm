import React from 'react';

export interface LanShieldVirusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldVirusRegular: React.FC<LanShieldVirusRegularProps>;
export default LanShieldVirusRegular;
