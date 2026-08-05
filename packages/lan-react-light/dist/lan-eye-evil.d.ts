import React from 'react';

export interface LanEyeEvilProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEyeEvil(props: LanEyeEvilProps): React.ReactElement;
export default LanEyeEvil;
