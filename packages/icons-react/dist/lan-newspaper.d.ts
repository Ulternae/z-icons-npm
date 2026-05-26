import React from 'react';

export interface LanNewspaperProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNewspaper: React.FC<LanNewspaperProps>;
export default LanNewspaper;
