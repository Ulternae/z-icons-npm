import React from 'react';

export interface LanFaceNoseSteamProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceNoseSteam(props: LanFaceNoseSteamProps): React.ReactElement;
export default LanFaceNoseSteam;
