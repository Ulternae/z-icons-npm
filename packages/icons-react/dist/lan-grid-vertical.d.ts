import React from 'react';

export interface LanGridVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGridVertical: React.FC<LanGridVerticalProps>;
export default LanGridVertical;
