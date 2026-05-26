import React from 'react';

export interface LanToiletPaperSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToiletPaperSlashRegular: React.FC<LanToiletPaperSlashRegularProps>;
export default LanToiletPaperSlashRegular;
