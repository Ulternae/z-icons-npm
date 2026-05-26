import React from 'react';

export interface LanFileAudioSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileAudioSolid: React.FC<LanFileAudioSolidProps>;
export default LanFileAudioSolid;
