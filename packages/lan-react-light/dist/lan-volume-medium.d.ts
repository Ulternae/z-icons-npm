import React from 'react';

export interface LanVolumeMediumProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVolumeMedium(props: LanVolumeMediumProps): React.ReactElement;
export default LanVolumeMedium;
