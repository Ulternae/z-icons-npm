import React from 'react';

export interface LanTentCircusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTentCircusRegular: React.FC<LanTentCircusRegularProps>;
export default LanTentCircusRegular;
