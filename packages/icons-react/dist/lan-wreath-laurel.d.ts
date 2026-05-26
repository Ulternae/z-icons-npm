import React from 'react';

export interface LanWreathLaurelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWreathLaurel: React.FC<LanWreathLaurelProps>;
export default LanWreathLaurel;
