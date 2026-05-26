import React from 'react';

export interface LanBooksSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBooksSolid: React.FC<LanBooksSolidProps>;
export default LanBooksSolid;
