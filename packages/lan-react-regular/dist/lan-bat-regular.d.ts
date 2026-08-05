import React from 'react';

export interface LanBatRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBatRegular(props: LanBatRegularProps): React.ReactElement;
export default LanBatRegular;
