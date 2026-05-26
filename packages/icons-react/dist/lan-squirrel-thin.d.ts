import React from 'react';

export interface LanSquirrelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquirrelThin: React.FC<LanSquirrelThinProps>;
export default LanSquirrelThin;
