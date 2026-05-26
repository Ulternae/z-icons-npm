import React from 'react';

export interface LanBrightnessSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBrightnessSolid: React.FC<LanBrightnessSolidProps>;
export default LanBrightnessSolid;
