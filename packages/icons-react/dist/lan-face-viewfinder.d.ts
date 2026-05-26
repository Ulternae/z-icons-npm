import React from 'react';

export interface LanFaceViewfinderProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceViewfinder: React.FC<LanFaceViewfinderProps>;
export default LanFaceViewfinder;
