import React from 'react';

export interface LanGlassMartiniAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlassMartiniAlt: React.FC<LanGlassMartiniAltProps>;
export default LanGlassMartiniAlt;
