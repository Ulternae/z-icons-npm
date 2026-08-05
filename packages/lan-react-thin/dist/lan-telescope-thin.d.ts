import React from 'react';

export interface LanTelescopeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTelescopeThin(props: LanTelescopeThinProps): React.ReactElement;
export default LanTelescopeThin;
