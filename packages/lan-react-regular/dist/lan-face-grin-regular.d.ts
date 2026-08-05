import React from 'react';

export interface LanFaceGrinRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceGrinRegular(props: LanFaceGrinRegularProps): React.ReactElement;
export default LanFaceGrinRegular;
