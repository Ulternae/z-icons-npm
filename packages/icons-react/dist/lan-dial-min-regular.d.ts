import React from 'react';

export interface LanDialMinRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDialMinRegular: React.FC<LanDialMinRegularProps>;
export default LanDialMinRegular;
