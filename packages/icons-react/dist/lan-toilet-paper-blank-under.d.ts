import React from 'react';

export interface LanToiletPaperBlankUnderProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToiletPaperBlankUnder: React.FC<LanToiletPaperBlankUnderProps>;
export default LanToiletPaperBlankUnder;
