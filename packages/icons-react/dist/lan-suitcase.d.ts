import React from 'react';

export interface LanSuitcaseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSuitcase: React.FC<LanSuitcaseProps>;
export default LanSuitcase;
