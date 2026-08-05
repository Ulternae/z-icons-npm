import React from 'react';

export interface LanVolumeMediumThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVolumeMediumThin(props: LanVolumeMediumThinProps): React.ReactElement;
export default LanVolumeMediumThin;
