import React from 'react';

export interface NeoForwardStepSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoForwardStepSolid(props: NeoForwardStepSolidProps): React.ReactElement;
export default NeoForwardStepSolid;
