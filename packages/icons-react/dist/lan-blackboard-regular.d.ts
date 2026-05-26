import React from 'react';

export interface LanBlackboardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlackboardRegular: React.FC<LanBlackboardRegularProps>;
export default LanBlackboardRegular;
