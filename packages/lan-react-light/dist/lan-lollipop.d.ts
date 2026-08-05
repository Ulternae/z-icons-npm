import React from 'react';

export interface LanLollipopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLollipop(props: LanLollipopProps): React.ReactElement;
export default LanLollipop;
