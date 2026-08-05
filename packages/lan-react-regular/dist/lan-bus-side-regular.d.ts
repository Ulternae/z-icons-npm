import React from 'react';

export interface LanBusSideRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBusSideRegular(props: LanBusSideRegularProps): React.ReactElement;
export default LanBusSideRegular;
