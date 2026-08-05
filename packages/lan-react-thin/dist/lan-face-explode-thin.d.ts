import React from 'react';

export interface LanFaceExplodeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceExplodeThin(props: LanFaceExplodeThinProps): React.ReactElement;
export default LanFaceExplodeThin;
