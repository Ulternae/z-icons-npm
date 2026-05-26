import React from 'react';

export interface LanDatabaseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDatabaseThin: React.FC<LanDatabaseThinProps>;
export default LanDatabaseThin;
