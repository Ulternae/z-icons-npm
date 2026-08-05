import React from 'react';

export interface LanToggleLargeOnRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToggleLargeOnRegular(props: LanToggleLargeOnRegularProps): React.ReactElement;
export default LanToggleLargeOnRegular;
