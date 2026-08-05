import React from 'react';

export interface LanFaceHandOverMouthProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceHandOverMouth(props: LanFaceHandOverMouthProps): React.ReactElement;
export default LanFaceHandOverMouth;
