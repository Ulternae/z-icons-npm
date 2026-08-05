import React from 'react';

export interface LanTugrikSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTugrikSign(props: LanTugrikSignProps): React.ReactElement;
export default LanTugrikSign;
