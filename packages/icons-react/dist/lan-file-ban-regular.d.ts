import React from 'react';

export interface LanFileBanRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileBanRegular: React.FC<LanFileBanRegularProps>;
export default LanFileBanRegular;
