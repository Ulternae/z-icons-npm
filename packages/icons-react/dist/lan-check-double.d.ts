import React from 'react';

export interface LanCheckDoubleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCheckDouble: React.FC<LanCheckDoubleProps>;
export default LanCheckDouble;
