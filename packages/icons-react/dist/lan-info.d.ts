import React from 'react';

export interface LanInfoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInfo: React.FC<LanInfoProps>;
export default LanInfo;
