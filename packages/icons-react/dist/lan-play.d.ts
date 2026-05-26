import React from 'react';

export interface LanPlayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlay: React.FC<LanPlayProps>;
export default LanPlay;
