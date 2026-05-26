import React from 'react';

export interface LanGolfFlagHoleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGolfFlagHoleRegular: React.FC<LanGolfFlagHoleRegularProps>;
export default LanGolfFlagHoleRegular;
