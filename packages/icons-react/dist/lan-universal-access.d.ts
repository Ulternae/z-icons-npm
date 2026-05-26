import React from 'react';

export interface LanUniversalAccessProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUniversalAccess: React.FC<LanUniversalAccessProps>;
export default LanUniversalAccess;
