import React from 'react';

export interface LanSquirrelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquirrel: React.FC<LanSquirrelProps>;
export default LanSquirrel;
