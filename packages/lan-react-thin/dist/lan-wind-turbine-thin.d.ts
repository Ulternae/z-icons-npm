import React from 'react';

export interface LanWindTurbineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindTurbineThin(props: LanWindTurbineThinProps): React.ReactElement;
export default LanWindTurbineThin;
