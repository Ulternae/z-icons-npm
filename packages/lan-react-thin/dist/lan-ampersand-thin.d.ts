import React from 'react';

export interface LanAmpersandThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAmpersandThin(props: LanAmpersandThinProps): React.ReactElement;
export default LanAmpersandThin;
