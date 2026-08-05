import React from 'react';

export interface LanMobilePhoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMobilePhoneSolid(props: LanMobilePhoneSolidProps): React.ReactElement;
export default LanMobilePhoneSolid;
