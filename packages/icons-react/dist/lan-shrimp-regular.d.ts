import React from 'react';

export interface LanShrimpRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShrimpRegular: React.FC<LanShrimpRegularProps>;
export default LanShrimpRegular;
