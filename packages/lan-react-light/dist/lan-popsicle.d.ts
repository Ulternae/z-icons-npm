import React from 'react';

export interface LanPopsicleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPopsicle(props: LanPopsicleProps): React.ReactElement;
export default LanPopsicle;
