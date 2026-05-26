import React from 'react';

export interface LanSquirrelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquirrelRegular: React.FC<LanSquirrelRegularProps>;
export default LanSquirrelRegular;
