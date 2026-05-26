import React from 'react';

export interface LanWatchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWatch: React.FC<LanWatchProps>;
export default LanWatch;
