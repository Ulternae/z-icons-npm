import React from 'react';

export interface LanMagnifyingGlassPlayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMagnifyingGlassPlay: React.FC<LanMagnifyingGlassPlayProps>;
export default LanMagnifyingGlassPlay;
