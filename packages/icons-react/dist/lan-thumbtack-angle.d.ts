import React from 'react';

export interface LanThumbtackAngleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanThumbtackAngle: React.FC<LanThumbtackAngleProps>;
export default LanThumbtackAngle;
