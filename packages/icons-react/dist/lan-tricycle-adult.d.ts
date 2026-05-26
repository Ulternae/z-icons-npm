import React from 'react';

export interface LanTricycleAdultProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTricycleAdult: React.FC<LanTricycleAdultProps>;
export default LanTricycleAdult;
