import React from 'react';

export interface LanVirusesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVirusesRegular: React.FC<LanVirusesRegularProps>;
export default LanVirusesRegular;
