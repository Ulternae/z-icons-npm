import React from 'react';

export interface LanVialThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVialThin(props: LanVialThinProps): React.ReactElement;
export default LanVialThin;
