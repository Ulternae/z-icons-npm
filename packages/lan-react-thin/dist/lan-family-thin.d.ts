import React from 'react';

export interface LanFamilyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFamilyThin(props: LanFamilyThinProps): React.ReactElement;
export default LanFamilyThin;
