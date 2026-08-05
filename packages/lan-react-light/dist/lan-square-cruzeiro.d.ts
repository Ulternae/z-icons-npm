import React from 'react';

export interface LanSquareCruzeiroProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareCruzeiro(props: LanSquareCruzeiroProps): React.ReactElement;
export default LanSquareCruzeiro;
