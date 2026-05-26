import React from 'react';

export interface LanGlassWhiskeyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlassWhiskey: React.FC<LanGlassWhiskeyProps>;
export default LanGlassWhiskey;
