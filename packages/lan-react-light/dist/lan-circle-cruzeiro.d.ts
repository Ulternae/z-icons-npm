import React from 'react';

export interface LanCircleCruzeiroProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleCruzeiro(props: LanCircleCruzeiroProps): React.ReactElement;
export default LanCircleCruzeiro;
