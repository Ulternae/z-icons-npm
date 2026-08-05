import React from 'react';

export interface LanVolumeLowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVolumeLowRegular(props: LanVolumeLowRegularProps): React.ReactElement;
export default LanVolumeLowRegular;
