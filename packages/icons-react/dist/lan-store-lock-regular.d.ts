import React from 'react';

export interface LanStoreLockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStoreLockRegular: React.FC<LanStoreLockRegularProps>;
export default LanStoreLockRegular;
