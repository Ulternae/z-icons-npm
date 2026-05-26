import React from 'react';

export interface LanWindowRestoreRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWindowRestoreRegular: React.FC<LanWindowRestoreRegularProps>;
export default LanWindowRestoreRegular;
