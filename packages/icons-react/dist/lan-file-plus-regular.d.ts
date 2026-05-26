import React from 'react';

export interface LanFilePlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilePlusRegular: React.FC<LanFilePlusRegularProps>;
export default LanFilePlusRegular;
