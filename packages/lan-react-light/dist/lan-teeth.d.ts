import React from 'react';

export interface LanTeethProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTeeth(props: LanTeethProps): React.ReactElement;
export default LanTeeth;
