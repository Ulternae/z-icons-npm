import React from 'react';

export interface LanPawClawsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPawClaws(props: LanPawClawsProps): React.ReactElement;
export default LanPawClaws;
