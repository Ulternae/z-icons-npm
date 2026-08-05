import React from 'react';

export interface LanToggleOnRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToggleOnRegular(props: LanToggleOnRegularProps): React.ReactElement;
export default LanToggleOnRegular;
