import React from 'react';

export interface LanPersonSkatingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSkatingThin(props: LanPersonSkatingThinProps): React.ReactElement;
export default LanPersonSkatingThin;
