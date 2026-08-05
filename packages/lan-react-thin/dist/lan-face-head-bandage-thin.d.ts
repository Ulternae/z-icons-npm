import React from 'react';

export interface LanFaceHeadBandageThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceHeadBandageThin(props: LanFaceHeadBandageThinProps): React.ReactElement;
export default LanFaceHeadBandageThin;
