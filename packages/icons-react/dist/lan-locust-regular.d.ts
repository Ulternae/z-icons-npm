import React from 'react';

export interface LanLocustRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLocustRegular: React.FC<LanLocustRegularProps>;
export default LanLocustRegular;
