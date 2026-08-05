import React from 'react';

export interface LanPersonRifleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonRifleThin(props: LanPersonRifleThinProps): React.ReactElement;
export default LanPersonRifleThin;
