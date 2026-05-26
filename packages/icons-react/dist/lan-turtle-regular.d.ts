import React from 'react';

export interface LanTurtleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTurtleRegular: React.FC<LanTurtleRegularProps>;
export default LanTurtleRegular;
