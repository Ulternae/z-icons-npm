import React from 'react';

export interface LanFileMusicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileMusic(props: LanFileMusicProps): React.ReactElement;
export default LanFileMusic;
