import React from 'react';

export interface LanTasksAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTasksAltThin: React.FC<LanTasksAltThinProps>;
export default LanTasksAltThin;
