import React from 'react';

export interface LanHandLoveRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandLoveRegular: React.FC<LanHandLoveRegularProps>;
export default LanHandLoveRegular;
