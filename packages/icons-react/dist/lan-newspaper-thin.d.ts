import React from 'react';

export interface LanNewspaperThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNewspaperThin: React.FC<LanNewspaperThinProps>;
export default LanNewspaperThin;
