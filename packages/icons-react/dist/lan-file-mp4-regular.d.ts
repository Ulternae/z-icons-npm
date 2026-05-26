import React from 'react';

export interface LanFileMp4RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileMp4Regular: React.FC<LanFileMp4RegularProps>;
export default LanFileMp4Regular;
