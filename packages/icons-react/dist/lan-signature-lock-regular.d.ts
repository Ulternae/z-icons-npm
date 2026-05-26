import React from 'react';

export interface LanSignatureLockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignatureLockRegular: React.FC<LanSignatureLockRegularProps>;
export default LanSignatureLockRegular;
