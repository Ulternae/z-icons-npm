import React from 'react';

export interface LanCloneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloneRegular: React.FC<LanCloneRegularProps>;
export default LanCloneRegular;
