import React from 'react';

export interface LanFaceGrimaceThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceGrimaceThin(props: LanFaceGrimaceThinProps): React.ReactElement;
export default LanFaceGrimaceThin;
