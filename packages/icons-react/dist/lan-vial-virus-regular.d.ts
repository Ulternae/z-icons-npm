import React from 'react';

export interface LanVialVirusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVialVirusRegular: React.FC<LanVialVirusRegularProps>;
export default LanVialVirusRegular;
