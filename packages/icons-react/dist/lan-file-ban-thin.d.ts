import React from 'react';

export interface LanFileBanThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileBanThin: React.FC<LanFileBanThinProps>;
export default LanFileBanThin;
