import React from 'react';

export interface LanMobilePhoneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMobilePhoneThin(props: LanMobilePhoneThinProps): React.ReactElement;
export default LanMobilePhoneThin;
