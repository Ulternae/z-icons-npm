import React from 'react';

export interface LanFaceScreamRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceScreamRegular(props: LanFaceScreamRegularProps): React.ReactElement;
export default LanFaceScreamRegular;
