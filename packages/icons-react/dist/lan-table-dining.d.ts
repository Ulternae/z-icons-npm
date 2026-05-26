import React from 'react';

export interface LanTableDiningProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableDining: React.FC<LanTableDiningProps>;
export default LanTableDining;
