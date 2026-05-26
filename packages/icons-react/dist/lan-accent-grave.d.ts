import React from 'react';

export interface LanAccentGraveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAccentGrave: React.FC<LanAccentGraveProps>;
export default LanAccentGrave;
