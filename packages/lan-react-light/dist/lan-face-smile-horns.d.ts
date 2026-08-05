import React from 'react';

export interface LanFaceSmileHornsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSmileHorns(props: LanFaceSmileHornsProps): React.ReactElement;
export default LanFaceSmileHorns;
