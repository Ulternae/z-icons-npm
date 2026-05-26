import React from 'react';

export interface LanFileBanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileBan: React.FC<LanFileBanProps>;
export default LanFileBan;
