import React from 'react';

export interface LanProjectorRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanProjectorRegular(props: LanProjectorRegularProps): React.ReactElement;
export default LanProjectorRegular;
