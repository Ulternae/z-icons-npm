import React from 'react';

export interface LanSynagogueThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSynagogueThin(props: LanSynagogueThinProps): React.ReactElement;
export default LanSynagogueThin;
