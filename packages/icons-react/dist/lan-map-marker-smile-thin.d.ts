import React from 'react';

export interface LanMapMarkerSmileThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkerSmileThin: React.FC<LanMapMarkerSmileThinProps>;
export default LanMapMarkerSmileThin;
