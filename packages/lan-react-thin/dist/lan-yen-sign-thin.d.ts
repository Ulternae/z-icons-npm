import React from 'react';

export interface LanYenSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanYenSignThin(props: LanYenSignThinProps): React.ReactElement;
export default LanYenSignThin;
