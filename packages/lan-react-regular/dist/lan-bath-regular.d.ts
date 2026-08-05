import React from 'react';

export interface LanBathRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBathRegular(props: LanBathRegularProps): React.ReactElement;
export default LanBathRegular;
