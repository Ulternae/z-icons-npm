import React from 'react';

export interface LanToiletPaperUnderSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToiletPaperUnderSlash: React.FC<LanToiletPaperUnderSlashProps>;
export default LanToiletPaperUnderSlash;
