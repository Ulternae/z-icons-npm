import React from 'react';

export interface LanSubtitlesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSubtitlesSolid: React.FC<LanSubtitlesSolidProps>;
export default LanSubtitlesSolid;
