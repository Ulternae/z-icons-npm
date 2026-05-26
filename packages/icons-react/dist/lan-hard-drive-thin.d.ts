import React from 'react';

export interface LanHardDriveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHardDriveThin: React.FC<LanHardDriveThinProps>;
export default LanHardDriveThin;
