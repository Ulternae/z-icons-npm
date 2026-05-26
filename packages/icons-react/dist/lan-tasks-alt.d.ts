import React from 'react';

export interface LanTasksAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTasksAlt: React.FC<LanTasksAltProps>;
export default LanTasksAlt;
