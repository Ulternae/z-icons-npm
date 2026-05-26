import React from 'react';

export interface LanChurchRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChurchRegular: React.FC<LanChurchRegularProps>;
export default LanChurchRegular;
