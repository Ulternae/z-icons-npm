import React from 'react';

export interface LanPotatoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPotatoThin(props: LanPotatoThinProps): React.ReactElement;
export default LanPotatoThin;
