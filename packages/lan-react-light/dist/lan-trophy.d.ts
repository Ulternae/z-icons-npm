import React from 'react';

export interface LanTrophyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrophy(props: LanTrophyProps): React.ReactElement;
export default LanTrophy;
