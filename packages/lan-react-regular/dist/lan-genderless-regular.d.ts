import React from 'react';

export interface LanGenderlessRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGenderlessRegular(props: LanGenderlessRegularProps): React.ReactElement;
export default LanGenderlessRegular;
