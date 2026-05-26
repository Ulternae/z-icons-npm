import React from 'react';

export interface LanFileMp3ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileMp3Thin: React.FC<LanFileMp3ThinProps>;
export default LanFileMp3Thin;
