import React from 'react';

export interface LanFaceExplodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceExplode(props: LanFaceExplodeProps): React.ReactElement;
export default LanFaceExplode;
