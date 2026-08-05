import React from 'react';

export interface LanFilePlusMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilePlusMinusSolid(props: LanFilePlusMinusSolidProps): React.ReactElement;
export default LanFilePlusMinusSolid;
