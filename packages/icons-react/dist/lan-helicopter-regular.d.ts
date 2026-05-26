import React from 'react';

export interface LanHelicopterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHelicopterRegular: React.FC<LanHelicopterRegularProps>;
export default LanHelicopterRegular;
