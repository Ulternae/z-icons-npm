import React from 'react';

export interface LanCapsulesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCapsulesRegular: React.FC<LanCapsulesRegularProps>;
export default LanCapsulesRegular;
