import React from 'react';

export interface LanThumbtackAngleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanThumbtackAngleThin: React.FC<LanThumbtackAngleThinProps>;
export default LanThumbtackAngleThin;
