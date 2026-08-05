import React from 'react';

export interface LanTeethRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTeethRegular(props: LanTeethRegularProps): React.ReactElement;
export default LanTeethRegular;
