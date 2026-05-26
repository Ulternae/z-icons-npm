import React from 'react';

export interface LanMonumentProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMonument: React.FC<LanMonumentProps>;
export default LanMonument;
