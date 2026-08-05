import React from 'react';

export interface LanVolumeMediumRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVolumeMediumRegular(props: LanVolumeMediumRegularProps): React.ReactElement;
export default LanVolumeMediumRegular;
