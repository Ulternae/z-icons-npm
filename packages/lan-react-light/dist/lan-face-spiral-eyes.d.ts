import React from 'react';

export interface LanFaceSpiralEyesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSpiralEyes(props: LanFaceSpiralEyesProps): React.ReactElement;
export default LanFaceSpiralEyes;
