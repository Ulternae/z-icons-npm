import React from 'react';

export interface LanFaceExhalingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceExhaling(props: LanFaceExhalingProps): React.ReactElement;
export default LanFaceExhaling;
