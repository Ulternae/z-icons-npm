import React from 'react';

export interface LanAnchorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAnchor: React.FC<LanAnchorProps>;
export default LanAnchor;
