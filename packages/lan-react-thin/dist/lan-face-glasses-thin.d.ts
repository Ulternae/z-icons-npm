import React from 'react';

export interface LanFaceGlassesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceGlassesThin(props: LanFaceGlassesThinProps): React.ReactElement;
export default LanFaceGlassesThin;
