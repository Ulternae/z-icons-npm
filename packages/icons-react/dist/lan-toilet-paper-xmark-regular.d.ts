import React from 'react';

export interface LanToiletPaperXmarkRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToiletPaperXmarkRegular: React.FC<LanToiletPaperXmarkRegularProps>;
export default LanToiletPaperXmarkRegular;
