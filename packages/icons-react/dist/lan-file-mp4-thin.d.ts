import React from 'react';

export interface LanFileMp4ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileMp4Thin: React.FC<LanFileMp4ThinProps>;
export default LanFileMp4Thin;
