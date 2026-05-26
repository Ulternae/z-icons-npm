import React from 'react';

export interface LanToolboxRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToolboxRegular: React.FC<LanToolboxRegularProps>;
export default LanToolboxRegular;
