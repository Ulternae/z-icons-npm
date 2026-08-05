import React from 'react';

export interface LanFaceGrimaceRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceGrimaceRegular(props: LanFaceGrimaceRegularProps): React.ReactElement;
export default LanFaceGrimaceRegular;
