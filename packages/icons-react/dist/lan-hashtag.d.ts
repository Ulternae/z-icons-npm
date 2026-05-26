import React from 'react';

export interface LanHashtagProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHashtag: React.FC<LanHashtagProps>;
export default LanHashtag;
