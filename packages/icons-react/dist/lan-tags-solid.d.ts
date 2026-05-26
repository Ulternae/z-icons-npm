import React from 'react';

export interface LanTagsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTagsSolid: React.FC<LanTagsSolidProps>;
export default LanTagsSolid;
