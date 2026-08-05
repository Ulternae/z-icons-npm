import React from 'react';

export interface LanTentCircusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTentCircusRegular(props: LanTentCircusRegularProps): React.ReactElement;
export default LanTentCircusRegular;
