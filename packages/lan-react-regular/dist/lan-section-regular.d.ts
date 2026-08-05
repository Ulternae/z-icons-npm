import React from 'react';

export interface LanSectionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSectionRegular(props: LanSectionRegularProps): React.ReactElement;
export default LanSectionRegular;
