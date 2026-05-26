import React from 'react';

export interface LanSmogRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSmogRegular: React.FC<LanSmogRegularProps>;
export default LanSmogRegular;
