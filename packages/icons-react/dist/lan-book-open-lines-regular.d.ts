import React from 'react';

export interface LanBookOpenLinesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookOpenLinesRegular: React.FC<LanBookOpenLinesRegularProps>;
export default LanBookOpenLinesRegular;
