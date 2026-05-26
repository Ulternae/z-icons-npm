import React from 'react';

export interface LanGripLinesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGripLinesSolid: React.FC<LanGripLinesSolidProps>;
export default LanGripLinesSolid;
