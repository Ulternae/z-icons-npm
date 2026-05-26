import React from 'react';

export interface LanChildDressRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChildDressRegular: React.FC<LanChildDressRegularProps>;
export default LanChildDressRegular;
