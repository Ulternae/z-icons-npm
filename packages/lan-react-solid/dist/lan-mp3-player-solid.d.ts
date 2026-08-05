import React from 'react';

export interface LanMp3PlayerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMp3PlayerSolid(props: LanMp3PlayerSolidProps): React.ReactElement;
export default LanMp3PlayerSolid;
