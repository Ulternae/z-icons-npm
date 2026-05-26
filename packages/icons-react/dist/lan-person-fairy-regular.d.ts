import React from 'react';

export interface LanPersonFairyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonFairyRegular: React.FC<LanPersonFairyRegularProps>;
export default LanPersonFairyRegular;
