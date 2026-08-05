import React from 'react';

export interface LanKidneysRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKidneysRegular(props: LanKidneysRegularProps): React.ReactElement;
export default LanKidneysRegular;
