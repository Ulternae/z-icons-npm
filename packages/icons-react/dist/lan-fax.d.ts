import React from 'react';

export interface LanFaxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFax: React.FC<LanFaxProps>;
export default LanFax;
