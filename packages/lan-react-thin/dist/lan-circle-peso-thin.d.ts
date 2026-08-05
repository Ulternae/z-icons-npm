import React from 'react';

export interface LanCirclePesoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCirclePesoThin(props: LanCirclePesoThinProps): React.ReactElement;
export default LanCirclePesoThin;
