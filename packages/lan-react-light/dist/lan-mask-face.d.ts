import React from 'react';

export interface LanMaskFaceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMaskFace(props: LanMaskFaceProps): React.ReactElement;
export default LanMaskFace;
