import React from 'react';

export interface LanFileMp3RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileMp3Regular: React.FC<LanFileMp3RegularProps>;
export default LanFileMp3Regular;
