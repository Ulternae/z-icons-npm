import React from 'react';

export interface LanFilePowerpointRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilePowerpointRegular: React.FC<LanFilePowerpointRegularProps>;
export default LanFilePowerpointRegular;
