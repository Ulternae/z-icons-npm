import React from 'react';

export interface LanIdCardAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIdCardAltThin(props: LanIdCardAltThinProps): React.ReactElement;
export default LanIdCardAltThin;
