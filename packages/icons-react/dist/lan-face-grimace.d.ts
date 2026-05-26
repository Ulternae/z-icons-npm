import React from 'react';

export interface LanFaceGrimaceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceGrimace: React.FC<LanFaceGrimaceProps>;
export default LanFaceGrimace;
