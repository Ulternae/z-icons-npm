import React from 'react';

export interface LanFilePptThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilePptThin: React.FC<LanFilePptThinProps>;
export default LanFilePptThin;
