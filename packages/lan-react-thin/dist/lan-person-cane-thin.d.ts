import React from 'react';

export interface LanPersonCaneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonCaneThin(props: LanPersonCaneThinProps): React.ReactElement;
export default LanPersonCaneThin;
