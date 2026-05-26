import React from 'react';

export interface LanFilePowerpointThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilePowerpointThin: React.FC<LanFilePowerpointThinProps>;
export default LanFilePowerpointThin;
