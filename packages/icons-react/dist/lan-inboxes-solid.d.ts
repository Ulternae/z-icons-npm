import React from 'react';

export interface LanInboxesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInboxesSolid: React.FC<LanInboxesSolidProps>;
export default LanInboxesSolid;
