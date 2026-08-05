import React from 'react';

export interface LanUserHoodieProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserHoodie(props: LanUserHoodieProps): React.ReactElement;
export default LanUserHoodie;
