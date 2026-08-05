import React from 'react';

export interface LanLighthouseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLighthouseThin(props: LanLighthouseThinProps): React.ReactElement;
export default LanLighthouseThin;
