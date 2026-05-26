import React from 'react';

export interface LanToiletPaperCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToiletPaperCheckRegular: React.FC<LanToiletPaperCheckRegularProps>;
export default LanToiletPaperCheckRegular;
