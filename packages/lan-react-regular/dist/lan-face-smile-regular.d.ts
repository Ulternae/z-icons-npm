import React from 'react';

export interface LanFaceSmileRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSmileRegular(props: LanFaceSmileRegularProps): React.ReactElement;
export default LanFaceSmileRegular;
