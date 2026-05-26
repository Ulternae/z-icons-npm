import React from 'react';

export interface LanShortsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShortsSolid: React.FC<LanShortsSolidProps>;
export default LanShortsSolid;
