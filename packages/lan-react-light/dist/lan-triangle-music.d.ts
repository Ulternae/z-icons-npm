import React from 'react';

export interface LanTriangleMusicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTriangleMusic(props: LanTriangleMusicProps): React.ReactElement;
export default LanTriangleMusic;
