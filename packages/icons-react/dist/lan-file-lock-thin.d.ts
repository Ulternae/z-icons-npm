import React from 'react';

export interface LanFileLockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileLockThin: React.FC<LanFileLockThinProps>;
export default LanFileLockThin;
