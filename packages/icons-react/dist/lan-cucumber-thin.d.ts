import React from 'react';

export interface LanCucumberThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCucumberThin: React.FC<LanCucumberThinProps>;
export default LanCucumberThin;
