import React from 'react';

export interface LanMattressPillowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMattressPillowRegular(props: LanMattressPillowRegularProps): React.ReactElement;
export default LanMattressPillowRegular;
