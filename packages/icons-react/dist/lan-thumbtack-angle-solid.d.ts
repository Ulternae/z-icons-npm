import React from 'react';

export interface LanThumbtackAngleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanThumbtackAngleSolid: React.FC<LanThumbtackAngleSolidProps>;
export default LanThumbtackAngleSolid;
