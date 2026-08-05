import React from 'react';

export interface LanFaceHeadBandageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceHeadBandage(props: LanFaceHeadBandageProps): React.ReactElement;
export default LanFaceHeadBandage;
