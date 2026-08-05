import React from 'react';

export interface LanTRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTRegular(props: LanTRegularProps): React.ReactElement;
export default LanTRegular;
