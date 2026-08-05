import React from 'react';

export interface LanFaceExplodeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceExplodeRegular(props: LanFaceExplodeRegularProps): React.ReactElement;
export default LanFaceExplodeRegular;
