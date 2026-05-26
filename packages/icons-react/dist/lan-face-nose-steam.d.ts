import React from 'react';

export interface LanFaceNoseSteamProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceNoseSteam: React.FC<LanFaceNoseSteamProps>;
export default LanFaceNoseSteam;
