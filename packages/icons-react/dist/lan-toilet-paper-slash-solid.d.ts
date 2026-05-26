import React from 'react';

export interface LanToiletPaperSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToiletPaperSlashSolid: React.FC<LanToiletPaperSlashSolidProps>;
export default LanToiletPaperSlashSolid;
