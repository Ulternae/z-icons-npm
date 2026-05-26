import React from 'react';

export interface LanXmarksLinesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanXmarksLinesSolid: React.FC<LanXmarksLinesSolidProps>;
export default LanXmarksLinesSolid;
