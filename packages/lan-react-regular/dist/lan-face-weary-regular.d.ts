import React from 'react';

export interface LanFaceWearyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceWearyRegular(props: LanFaceWearyRegularProps): React.ReactElement;
export default LanFaceWearyRegular;
