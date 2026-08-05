import React from 'react';

export interface LanGrillRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrillRegular(props: LanGrillRegularProps): React.ReactElement;
export default LanGrillRegular;
