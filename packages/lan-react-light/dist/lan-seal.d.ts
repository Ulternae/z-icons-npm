import React from 'react';

export interface LanSealProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSeal(props: LanSealProps): React.ReactElement;
export default LanSeal;
