import React from 'react';

export interface LanGrillFireRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrillFireRegular(props: LanGrillFireRegularProps): React.ReactElement;
export default LanGrillFireRegular;
