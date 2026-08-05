import React from 'react';

export interface LanEyeLowVisionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEyeLowVision(props: LanEyeLowVisionProps): React.ReactElement;
export default LanEyeLowVision;
