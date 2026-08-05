import React from 'react';

export interface LanVrCardboardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVrCardboardRegular(props: LanVrCardboardRegularProps): React.ReactElement;
export default LanVrCardboardRegular;
