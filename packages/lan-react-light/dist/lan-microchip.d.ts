import React from 'react';

export interface LanMicrochipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMicrochip(props: LanMicrochipProps): React.ReactElement;
export default LanMicrochip;
