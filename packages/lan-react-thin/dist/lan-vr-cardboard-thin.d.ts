import React from 'react';

export interface LanVrCardboardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVrCardboardThin(props: LanVrCardboardThinProps): React.ReactElement;
export default LanVrCardboardThin;
