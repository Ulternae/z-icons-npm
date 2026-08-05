import React from 'react';

export interface LanPersonCaneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonCaneRegular(props: LanPersonCaneRegularProps): React.ReactElement;
export default LanPersonCaneRegular;
