import React from 'react';

export interface LanToiletPaperSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToiletPaperSlashThin: React.FC<LanToiletPaperSlashThinProps>;
export default LanToiletPaperSlashThin;
