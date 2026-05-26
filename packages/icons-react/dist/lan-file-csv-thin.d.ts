import React from 'react';

export interface LanFileCsvThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileCsvThin: React.FC<LanFileCsvThinProps>;
export default LanFileCsvThin;
