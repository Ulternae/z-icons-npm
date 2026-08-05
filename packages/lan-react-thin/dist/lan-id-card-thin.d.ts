import React from 'react';

export interface LanIdCardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIdCardThin(props: LanIdCardThinProps): React.ReactElement;
export default LanIdCardThin;
