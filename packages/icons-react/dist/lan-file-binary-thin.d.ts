import React from 'react';

export interface LanFileBinaryThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileBinaryThin: React.FC<LanFileBinaryThinProps>;
export default LanFileBinaryThin;
