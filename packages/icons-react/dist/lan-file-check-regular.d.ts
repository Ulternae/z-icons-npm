import React from 'react';

export interface LanFileCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileCheckRegular: React.FC<LanFileCheckRegularProps>;
export default LanFileCheckRegular;
