import React from 'react';

export interface LanSickleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSickleRegular: React.FC<LanSickleRegularProps>;
export default LanSickleRegular;
