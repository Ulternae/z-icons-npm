import React from 'react';

export interface LanMobileRetroProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMobileRetro(props: LanMobileRetroProps): React.ReactElement;
export default LanMobileRetro;
