import React from 'react';

export interface LanFaceMehBlankProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceMehBlank: React.FC<LanFaceMehBlankProps>;
export default LanFaceMehBlank;
