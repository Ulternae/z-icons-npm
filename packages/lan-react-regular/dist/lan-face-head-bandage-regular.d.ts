import React from 'react';

export interface LanFaceHeadBandageRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceHeadBandageRegular(props: LanFaceHeadBandageRegularProps): React.ReactElement;
export default LanFaceHeadBandageRegular;
