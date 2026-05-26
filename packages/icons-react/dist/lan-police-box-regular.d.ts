import React from 'react';

export interface LanPoliceBoxRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPoliceBoxRegular: React.FC<LanPoliceBoxRegularProps>;
export default LanPoliceBoxRegular;
