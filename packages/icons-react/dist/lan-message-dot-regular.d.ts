import React from 'react';

export interface LanMessageDotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMessageDotRegular: React.FC<LanMessageDotRegularProps>;
export default LanMessageDotRegular;
