import React from 'react';

export interface LanFaceViewfinderRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceViewfinderRegular(props: LanFaceViewfinderRegularProps): React.ReactElement;
export default LanFaceViewfinderRegular;
