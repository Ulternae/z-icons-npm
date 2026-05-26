import React from 'react';

export interface LanVrCardboardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVrCardboardRegular: React.FC<LanVrCardboardRegularProps>;
export default LanVrCardboardRegular;
