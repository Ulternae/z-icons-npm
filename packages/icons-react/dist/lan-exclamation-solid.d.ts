import React from 'react';

export interface LanExclamationSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanExclamationSolid: React.FC<LanExclamationSolidProps>;
export default LanExclamationSolid;
