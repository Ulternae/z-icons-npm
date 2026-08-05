import React from 'react';

export interface LanAcornThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAcornThin(props: LanAcornThinProps): React.ReactElement;
export default LanAcornThin;
