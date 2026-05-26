import React from 'react';

export interface LanAquariusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAquarius: React.FC<LanAquariusProps>;
export default LanAquarius;
