import React from 'react';

export interface LanFireRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFireRegular: React.FC<LanFireRegularProps>;
export default LanFireRegular;
