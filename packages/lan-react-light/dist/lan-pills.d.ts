import React from 'react';

export interface LanPillsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPills(props: LanPillsProps): React.ReactElement;
export default LanPills;
