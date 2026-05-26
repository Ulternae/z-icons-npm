import React from 'react';

export interface LanFilePenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilePenThin: React.FC<LanFilePenThinProps>;
export default LanFilePenThin;
