import React from 'react';

export interface LanShuttersSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShuttersSolid: React.FC<LanShuttersSolidProps>;
export default LanShuttersSolid;
