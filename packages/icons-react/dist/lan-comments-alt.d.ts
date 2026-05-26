import React from 'react';

export interface LanCommentsAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentsAlt: React.FC<LanCommentsAltProps>;
export default LanCommentsAlt;
