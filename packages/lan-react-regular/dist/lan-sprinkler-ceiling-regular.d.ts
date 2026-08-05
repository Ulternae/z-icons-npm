import React from 'react';

export interface LanSprinklerCeilingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSprinklerCeilingRegular(props: LanSprinklerCeilingRegularProps): React.ReactElement;
export default LanSprinklerCeilingRegular;
