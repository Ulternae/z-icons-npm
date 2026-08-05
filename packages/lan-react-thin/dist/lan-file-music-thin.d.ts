import React from 'react';

export interface LanFileMusicThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileMusicThin(props: LanFileMusicThinProps): React.ReactElement;
export default LanFileMusicThin;
