import React from 'react';

export interface LanTriangleMusicThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTriangleMusicThin(props: LanTriangleMusicThinProps): React.ReactElement;
export default LanTriangleMusicThin;
