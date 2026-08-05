import React from 'react';

export interface LanFileMusicSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileMusicSolid(props: LanFileMusicSolidProps): React.ReactElement;
export default LanFileMusicSolid;
