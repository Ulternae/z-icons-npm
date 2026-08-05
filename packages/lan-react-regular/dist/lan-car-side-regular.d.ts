import React from 'react';

export interface LanCarSideRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarSideRegular(props: LanCarSideRegularProps): React.ReactElement;
export default LanCarSideRegular;
