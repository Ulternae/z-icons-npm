import React from 'react';

export interface LanApertureThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanApertureThin(props: LanApertureThinProps): React.ReactElement;
export default LanApertureThin;
