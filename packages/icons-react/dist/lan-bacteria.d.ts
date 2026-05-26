import React from 'react';

export interface LanBacteriaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBacteria: React.FC<LanBacteriaProps>;
export default LanBacteria;
