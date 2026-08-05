import React from 'react';

export interface LanIceSkateThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIceSkateThin(props: LanIceSkateThinProps): React.ReactElement;
export default LanIceSkateThin;
