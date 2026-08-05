import React from 'react';

export interface LanTrafficConeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrafficConeThin(props: LanTrafficConeThinProps): React.ReactElement;
export default LanTrafficConeThin;
