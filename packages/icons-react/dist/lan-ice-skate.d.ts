import React from 'react';

export interface LanIceSkateProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIceSkate: React.FC<LanIceSkateProps>;
export default LanIceSkate;
