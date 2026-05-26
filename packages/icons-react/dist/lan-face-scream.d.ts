import React from 'react';

export interface LanFaceScreamProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceScream: React.FC<LanFaceScreamProps>;
export default LanFaceScream;
