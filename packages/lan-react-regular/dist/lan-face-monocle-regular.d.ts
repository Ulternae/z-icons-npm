import React from 'react';

export interface LanFaceMonocleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceMonocleRegular(props: LanFaceMonocleRegularProps): React.ReactElement;
export default LanFaceMonocleRegular;
