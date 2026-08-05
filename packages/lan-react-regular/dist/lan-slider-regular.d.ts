import React from 'react';

export interface LanSliderRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSliderRegular(props: LanSliderRegularProps): React.ReactElement;
export default LanSliderRegular;
