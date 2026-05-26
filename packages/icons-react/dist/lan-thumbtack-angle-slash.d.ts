import React from 'react';

export interface LanThumbtackAngleSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanThumbtackAngleSlash: React.FC<LanThumbtackAngleSlashProps>;
export default LanThumbtackAngleSlash;
