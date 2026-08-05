import React from 'react';

export interface LanWaffleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWaffleThin(props: LanWaffleThinProps): React.ReactElement;
export default LanWaffleThin;
