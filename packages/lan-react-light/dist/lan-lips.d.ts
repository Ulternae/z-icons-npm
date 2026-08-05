import React from 'react';

export interface LanLipsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLips(props: LanLipsProps): React.ReactElement;
export default LanLips;
