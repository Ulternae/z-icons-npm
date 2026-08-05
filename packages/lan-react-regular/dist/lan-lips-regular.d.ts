import React from 'react';

export interface LanLipsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLipsRegular(props: LanLipsRegularProps): React.ReactElement;
export default LanLipsRegular;
