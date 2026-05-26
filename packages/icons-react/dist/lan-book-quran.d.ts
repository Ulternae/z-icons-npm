import React from 'react';

export interface LanBookQuranProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookQuran: React.FC<LanBookQuranProps>;
export default LanBookQuran;
