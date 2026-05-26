import React from 'react';

export interface LanToiletPaperSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToiletPaperSlash: React.FC<LanToiletPaperSlashProps>;
export default LanToiletPaperSlash;
