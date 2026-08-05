import React from 'react';

export interface LanCircleCruzeiroRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleCruzeiroRegular(props: LanCircleCruzeiroRegularProps): React.ReactElement;
export default LanCircleCruzeiroRegular;
