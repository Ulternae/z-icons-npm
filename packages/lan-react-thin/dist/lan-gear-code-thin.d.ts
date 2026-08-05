import React from 'react';

export interface LanGearCodeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGearCodeThin(props: LanGearCodeThinProps): React.ReactElement;
export default LanGearCodeThin;
