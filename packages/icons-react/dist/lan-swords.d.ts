import React from 'react';

export interface LanSwordsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSwords: React.FC<LanSwordsProps>;
export default LanSwords;
