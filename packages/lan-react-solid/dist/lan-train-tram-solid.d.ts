import React from 'react';

export interface LanTrainTramSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrainTramSolid(props: LanTrainTramSolidProps): React.ReactElement;
export default LanTrainTramSolid;
