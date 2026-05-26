import React from 'react';

export interface LanFaceNoseSteamThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceNoseSteamThin: React.FC<LanFaceNoseSteamThinProps>;
export default LanFaceNoseSteamThin;
