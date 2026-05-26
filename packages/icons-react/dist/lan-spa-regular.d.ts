import React from 'react';

export interface LanSpaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpaRegular: React.FC<LanSpaRegularProps>;
export default LanSpaRegular;
