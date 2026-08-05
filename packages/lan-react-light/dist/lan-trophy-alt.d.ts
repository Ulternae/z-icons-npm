import React from 'react';

export interface LanTrophyAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrophyAlt(props: LanTrophyAltProps): React.ReactElement;
export default LanTrophyAlt;
