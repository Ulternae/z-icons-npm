import React from 'react';

export interface LanDiscDriveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiscDriveThin: React.FC<LanDiscDriveThinProps>;
export default LanDiscDriveThin;
