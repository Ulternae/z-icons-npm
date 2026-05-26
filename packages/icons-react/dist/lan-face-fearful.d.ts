import React from 'react';

export interface LanFaceFearfulProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceFearful: React.FC<LanFaceFearfulProps>;
export default LanFaceFearful;
