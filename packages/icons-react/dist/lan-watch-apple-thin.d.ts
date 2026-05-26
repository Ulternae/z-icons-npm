import React from 'react';

export interface LanWatchAppleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWatchAppleThin: React.FC<LanWatchAppleThinProps>;
export default LanWatchAppleThin;
