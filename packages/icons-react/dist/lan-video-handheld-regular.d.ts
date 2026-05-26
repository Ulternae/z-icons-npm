import React from 'react';

export interface LanVideoHandheldRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVideoHandheldRegular: React.FC<LanVideoHandheldRegularProps>;
export default LanVideoHandheldRegular;
