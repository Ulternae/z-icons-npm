import React from 'react';

export interface LanGripLinesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGripLinesRegular: React.FC<LanGripLinesRegularProps>;
export default LanGripLinesRegular;
