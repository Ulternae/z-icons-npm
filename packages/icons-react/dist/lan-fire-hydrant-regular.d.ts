import React from 'react';

export interface LanFireHydrantRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFireHydrantRegular: React.FC<LanFireHydrantRegularProps>;
export default LanFireHydrantRegular;
