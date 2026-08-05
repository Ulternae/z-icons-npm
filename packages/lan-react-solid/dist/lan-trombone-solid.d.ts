import React from 'react';

export interface LanTromboneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTromboneSolid(props: LanTromboneSolidProps): React.ReactElement;
export default LanTromboneSolid;
