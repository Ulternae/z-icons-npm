import React from 'react';

export interface LanChfSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChfSign(props: LanChfSignProps): React.ReactElement;
export default LanChfSign;
