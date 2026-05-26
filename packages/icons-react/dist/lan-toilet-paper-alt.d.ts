import React from 'react';

export interface LanToiletPaperAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToiletPaperAlt: React.FC<LanToiletPaperAltProps>;
export default LanToiletPaperAlt;
