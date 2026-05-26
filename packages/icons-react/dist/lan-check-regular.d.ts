import React from 'react';

export interface LanCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCheckRegular: React.FC<LanCheckRegularProps>;
export default LanCheckRegular;
