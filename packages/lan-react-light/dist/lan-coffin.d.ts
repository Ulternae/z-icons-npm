import React from 'react';

export interface LanCoffinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoffin(props: LanCoffinProps): React.ReactElement;
export default LanCoffin;
