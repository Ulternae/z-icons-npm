import React from 'react';

export interface LanHorseshoeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHorseshoe(props: LanHorseshoeProps): React.ReactElement;
export default LanHorseshoe;
