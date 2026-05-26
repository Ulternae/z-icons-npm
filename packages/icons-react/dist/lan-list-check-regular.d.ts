import React from 'react';

export interface LanListCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanListCheckRegular: React.FC<LanListCheckRegularProps>;
export default LanListCheckRegular;
