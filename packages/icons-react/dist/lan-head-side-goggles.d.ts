import React from 'react';

export interface LanHeadSideGogglesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeadSideGoggles: React.FC<LanHeadSideGogglesProps>;
export default LanHeadSideGoggles;
